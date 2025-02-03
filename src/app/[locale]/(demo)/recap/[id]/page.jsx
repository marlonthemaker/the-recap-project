import RecapExample from '@/src/components/base/recap/RecapExample';
import {getLocale} from 'next-intl/server';

async function fetchSummarizedData(gameId) {
  const apiUrl = process.env.NEXT_PUBLIC_FIREBASE_URL
      ? `${process.env.NEXT_PUBLIC_FIREBASE_URL}/api/summarize`
      : "http://localhost:3000/api/summarize"; // Fallback for local
      console.log('apiUrl', apiUrl)
      const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ gameId }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || `Failed to fetch summary. Status: ${response.status}`);
  }
  return response.json();
}

export default async function RecapPage({ params }) {
  const gameId = (await params).id
  console.log('id', gameId)
  
  const response = await fetchSummarizedData(gameId);
  const locale = await getLocale();
  console.log('response', response)
  console.log('locale', locale)

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RecapExample 
          recapData={response}
          locale={locale}
        />
      </div>
    </div>
  )
}