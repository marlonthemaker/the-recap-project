export function formatBoxScoreForGemini(boxscore) {
    const homeTeam = boxscore.teams.home.team.name;
    const awayTeam = boxscore.teams.away.team.name;
    const homeScore = boxscore.teams.home.runs;
    const awayScore = boxscore.teams.away.runs;
    const winningTeam = homeScore > awayScore ? homeTeam : awayTeam;

    return {
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        winningTeam,
        inningSummary: boxscore.innings.map(inning => ({
            num: inning.num,
            home: inning.home.runs,
            away: inning.away.runs,
            events: inning.events.map((event) => ({
                description: event.description,
                player: event.player?.fullName,
                type: event.type
            }))
        }))
    };
}
