import RecapAdmin from "@/src/components/base/recap/RecapAdmin"
import { getLocale } from 'next-intl/server';
import { getSchedule, getGameData } from "@/src/lib/preloaders";

async function fetchGameSummaries(games) {
  const apiUrl = process.env.NEXT_PUBLIC_FIREBASE_URL
    ? `${process.env.NEXT_PUBLIC_FIREBASE_URL}/api/group`
    : "http://localhost:3000/api/group"; // Fallback for local
  console.log('apiUrl', apiUrl)
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ games }),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || `Failed to fetch summary. Status: ${response.status}`);
  }

  return response.json();
}

export default async function RecapAdminPage({ params }) {
  const id = (await params).id
  const locale = await getLocale();
  const gamesToday = await getSchedule(id);

  const { gamePks } = gamesToday;
  const gamePkIds = gamePks.join(",")
  const totalData = await fetchGameSummaries(gamePkIds);

  const { games, gameSummaries } = totalData;
  console.log('totalData', totalData);
  console.log('games', games);
  console.log('gameSummaries', gameSummaries);
  console.log('id', id)
  console.log('locale', locale)
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RecapAdmin 
          data={gamesToday}
          responseGames={games}
          summaries={gameSummaries}
          locale={locale}
        />
      </div>
    </div>
  )
}