import {Link} from '@/src/i18n/routing';
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function RecapAdmin({ 
  data,
  responseGames,
  summaries,
  locale
}) {
  const { games, gamePks } = data;

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {games.map((gameData) => {
      const { gameId } = gameData;
      const gameWithSummary = summaries.find((summary) => summary.gameId === gameId);
      console.log("gameWithSummary", gameWithSummary);
      
      return (
        <li key={gameId} className="relative flex justify-between py-5">
          <div className="flex gap-x-4 pr-6 sm:w-1/2 sm:flex-none">
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">
                <Link href={`/recap/${gameId}`}>
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  View recap for gameIdId: {gameId}
                </Link>
              </p>
              <p className="mt-1 flex text-xs/5 text-gray-500">
                  {`${gameData.homeId} vs ${gameData.awayId}`}
              </p>
              {
              gameWithSummary && 
              gameWithSummary.singleGameSummary &&
              (<p className="mt-1 flex text-xs/5 text-gray-500">{`${gameWithSummary.singleGameSummary[locale]}`}</p>)
              }
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-4 sm:w-1/2 sm:flex-none">
            <div className="hidden sm:block">
              <p className="mt-1 text-xs/5 text-gray-500">
                {`home score ${gameData.homeScore}`}
              </p>
              <p className="text-xs/5 text-gray-500">
                {`away score ${gameData.awayScore}`}
              </p>
            </div>
            <Link href={`/recap/${gameId}`}>
              <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </Link>
          </div>
        </li>
      )}
    )}
    </ul>
  )
}