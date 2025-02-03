'use client';

import { useState } from 'react';

export default function GameSummary() {
    const [gameId, setGameId] = useState('');
    const [summary, setSummary] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGameIdChange = (event) => {
        setGameId(event.target.value);
    };

    const fetchSummary = async () => {
        setLoading(true);
        setError(null);
        setSummary(null);

        try {
            const response = await fetch('/api/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ gameId }),
            });

            if (!response.ok) {
                const errorData = await response.json()
				throw new Error(errorData.error || `Failed to fetch summary. Status: ${response.status}`);
            }

            const data = await response.json();
            // const {english, japanese, spanish} = data
            debugger
            console.log("api response", data);
            setSummary(data);
        } catch (err) {
            console.error('Error fetching game summary:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <label htmlFor="gameId">Game ID:</label>
            <input
                type="text"
                id="gameId"
                value={gameId}
                onChange={handleGameIdChange}
                placeholder="Enter Game ID (e.g., 775332)"
                className="border p-2 rounded mr-2"
            />
            <button
                onClick={fetchSummary}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
            >
                {loading ? 'Loading...' : 'Get Summary'}
            </button>
            {error && (
                <div className="text-red-500 mt-2">Error: {error}</div>
            )}
             {summary && Object.keys(summary).length > 0 ?  (
                <div className="mt-4">
                    {summary.en && (
                        <div>
                            <h3 className="text-lg font-semibold mb-1">English Summary:</h3>
                            <p>{summary.en}</p>
                        </div>
                    )}
                    {summary.es && (
                        <div>
                            <h3 className="text-lg font-semibold mb-1">Spanish Summary:</h3>
                            <p>{summary.es}</p>
                        </div>
                    )}
                     {summary.ja && (
                        <div>
                             <h3 className="text-lg font-semibold mb-1">Japanese Summary:</h3>
                            <p>{summary.ja}</p>
                         </div>
                     )}
                </div>
               ) : summary !== null && (
                <div className="mt-4">No summary available</div>
               )}
        </div>
    );
}