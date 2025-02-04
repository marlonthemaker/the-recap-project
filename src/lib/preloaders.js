import { cache } from 'react'
import 'server-only'
 
export const preload = (id) => {
  void getSchedule(id)
}
 
export const getSchedule = cache(async (id) => {
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
  return output.gameDigests[id];
})