import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'server-only';
import { getGameData } from '@/src/lib/preloaders';
const geminiApiKey = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-pro-latest";

async function getGroupSummary(games) {
  let groupSummaryResponse;
  const gameIds = games.split(",");
  const gameIdsForRequest = gameIds.slice(0, 3);
  const gamesData = await Promise.all(gameIdsForRequest.map(async (game) => {
    const gameData = await getGameData(game);
    return ({
      gameId: game,
      gameData
    })
  }));
  groupSummaryResponse = {
    games: gamesData
  }
  return groupSummaryResponse;
}

export async function POST(req) {


  const requestData = await req.json()
  const { games } = requestData
  if (!geminiApiKey) {
    return NextResponse.json({ error: "GEMINI_API_KEY not found" }, { status: 500 });
  }
  const ai = new GoogleGenerativeAI(geminiApiKey);
  const model = ai.getGenerativeModel({ model: MODEL_NAME });
  const tools = [{
    function_declarations: [{
      name: "getGroupSummary",
      description: "Retrieves the box score data for specific MLB games.",
      parameters: {
        type: "object",
        properties: {
          games: {
            type: "string",
            description: "The unique identifiers for a group of MLB games."
          }
        },
        required: ["games"]
      }
    }]
  }];

  const prompt = `You will be provided an object with a key titled “games” and the value of this key is an array that is filled with one to many objects representing individual games.

These individual game objects hold data responses obtained from the api requests of the major league baseball api at https://statsapi.mlb.com/api/v1.

For each game object you are to generate a concise 2-4 sentence summary of the game including:

      - home vs away
      - game conditions
      - final score and who won
      - important moments/plays in the game

The game summary statement should be in a format akin to a professional baseball sportscaster. 

Each summary should be translated to american english, mexican spanish, and japanese.

Each individual game summary is to be returned with the others in a single, valid JSON file following the example provided below. The example provided would be the outline of the result from the games object containing two individual game summary request objects.

Example provided for returned data:
{“allGameSummaries”: [{
	”gameId”: 747060,
	"singleGameSummary” : {
		“en”: "”,
		“es”: "”,
		“ja”: "”
  }
}, {
”gameId”: 746737,
"singleGameSummary” : {
		“en”: "”,
		“es”: "”,
		“ja”: "”,
	}
}]}`;

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
      if (call.name === "getGroupSummary") {
        functionResult = await getGroupSummary(games);
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
  let cleanText = text.replace(/```json\n?/, "").replace(/\n```/, "").trim();
  const responseVals = JSON.parse(cleanText)
  const finalResponse = {
    games: functionResult.games,
    gameSummaries: responseVals.allGameSummaries
  }
  console.log('clean text: ', finalResponse);
  try {
    return NextResponse.json(finalResponse);
  } catch (error) {
    console.log('error parsing text', error);
    return NextResponse.json({ error: 'Failed to parse gemini text output' });
  }
}