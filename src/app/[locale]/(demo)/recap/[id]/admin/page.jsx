import RecapAdmin from "@/src/components/base/recap/RecapAdmin"
import {getLocale} from 'next-intl/server';

async function fetchGameSummaries(summaryId) {
  const response = await fetch(`https://statsapi.mlb.com/api/v1/schedule?sportId=1&season=2024&gameType=R`);
  let responseData = await response.json();
  let output;
  try {
    if(responseData){
      output = {
        gameDigests: {}
      };
      for (const dateData of responseData.dates) {
        output.gameDigests[dateData.date] = {
          games: [],
          gamePks: []
        };
        for (const game of dateData.games) {
          const gameDigest = {
              gameId: game.gamePk,
              homeId: game.teams.home.team.id,
              awayId: game.teams.away.team.id,
              homeScore: game.teams.home.score,
              awayScore: game.teams.away.score
          };
          output.gameDigests[dateData.date].games.push(gameDigest);
          output.gameDigests[dateData.date].gamePks.push(game.gamePk.toString());
        }
      }
    }
  } catch (error) {
      console.error('Error processing data:', error);
  }
    return output.gameDigests[summaryId];
  }

export default async function RecapAdminPage({ params }) {
  const id = (await params).id
  const locale = await getLocale();
  const gamesToday = await fetchGameSummaries(id);
  console.log('id', id)
  console.log('locale', locale)
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RecapAdmin data={gamesToday} />
      </div>
    </div>
  )
}