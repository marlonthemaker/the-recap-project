import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getGameData } from '@/src/lib/preloaders';
import 'server-only';
const geminiApiKey = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-pro-latest";

export async function POST(req) {
  async function getGameBoxScore(gameId) {
    return await getGameData(gameId)
  }

  const requestData = await req.json()
  const {gameId} = requestData
  if (!geminiApiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY not found" }, { status: 500 });
  }
  const ai = new GoogleGenerativeAI(geminiApiKey);
  const model = ai.getGenerativeModel({ model: MODEL_NAME });
  const tools = [{
      function_declarations: [{
          name: "getGameBoxScore",
          description: "Retrieves the box score data for a specific MLB game.",
          parameters: {
              type: "object",
              properties: {
                  gameId: {
                      type: "string",
                      description: "The unique identifier for the MLB game."
                  }
              },
              required: ["gameId"]
          }
      }]
  }];
  const prompt = `Can you provide a concise 2-4 sentence summary of the game including:

      - home vs away
      - game conditions
      - final score and who won
      - important moments/plays in the game

      The statement should be in a format akin to a professional baseball sportscaster. The summary should be in american english, mexican spanish, and japanese.
      The summaries should be returned as a single, valid JSON file with the keys for the translated summaries being en for english, es for spanish, and ja for japanese.`;

  const chat = model.startChat({
      tools,
      history: [],
  });
  let result = await chat.sendMessage(prompt);
  const functionCalls = result.response.functionCalls();
  let functionCall;
  let functionResult;
  if (functionCalls.length > 0) {
    for (const call of functionCalls) {
      if (call.name === "getGameBoxScore") {
        functionResult = await getGameBoxScore(gameId);
        functionCall = call;
      }
    }
  }
  result = await chat.sendMessage([
    {
      functionResponse: {
        name: functionCall.name,
        response: functionResult,
      },
    },
  ]);

  let text = await result.response.text()
  console.log('text: ', text);
  text = text.replace(/```json\n?/, "").replace(/\n```/, "").trim();

  try {
    return NextResponse.json(JSON.parse(text));
  } catch (error) {
    console.log('error parsing text', error);
    return NextResponse.json({ error: 'Failed to parse gemini text output' });
  }
}