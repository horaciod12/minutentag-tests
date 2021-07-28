/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState } from "react";

const TEAMS = [
  {
    name: "Red",
    players: ["Robin", "Rey", "Roger", "Richard"],
    games: [
      {
        score: 10,
        city: "LA",
      },
      {
        score: 1,
        city: "NJ",
      },
      {
        score: 3,
        city: "NY",
      },
    ],
  },
  {
    name: "Blue",
    players: ["Bob", "Ben"],
    games: [
      {
        score: 6,
        city: "CA",
      },
      {
        score: 3,
        city: "LA",
      },
    ],
  },
  {
    name: "Yellow",
    players: ["Yesmin", "Yuliana", "Yosemite"],
    games: [
      {
        score: 2,
        city: "NY",
      },
      {
        score: 4,
        city: "LA",
      },
      {
        score: 7,
        city: "AK",
      },
    ],
  },
];

export function TeamsList() {
  const [teams, setTeams] = useState(TEAMS);

  // Order teams by score (highest to lowest)
  function orderTeamByScoreHighestToLowest() {
    // Write your code here
    const highestToLowest = TEAMS
      .map((team) => ({
        ...team,
        totalScore: team.games.reduce((acc, game) => acc + game.score, 0),
      }))
      .sort((a, b) => b.totalScore - a.totalScore);

    setTeams(highestToLowest);
  }

  // Order teams by score (lowest to highest)
  function orderTeamByScoreLowestToHighest() {
    // Write your code here
    const lowestToHighest = TEAMS
      .map((team) => ({
        ...team,
        totalScore: team.games.reduce((acc, game) => acc + game.score, 0),
      }))
      .sort((a, b) => a.totalScore - b.totalScore);

    setTeams(lowestToHighest);
  }

  // Filtering teams that with at least 3 players
  function teamsWithMoreThanThreePlayers() {
    // Write your code here
    const filteredTeams = TEAMS.filter((team) => team.players.length > 2);
    setTeams(filteredTeams);
  }

  return (
    <div>
      <button onClick={() => setTeams(TEAMS)}>Initial list</button>

      <button onClick={orderTeamByScoreHighestToLowest}>
        Highest to Lowest
      </button>
      <button onClick={orderTeamByScoreLowestToHighest}>Lowest to Highest</button>
      <button onClick={teamsWithMoreThanThreePlayers}>
        Teams with at least 3 players
      </button>

      <ul className="teams">
        {/** Render the list of teams */}
        {teams.map((team, index) => (
          <li key={index}>
            <p>Team name: {team.name}</p>
            <p>Player’s quantity: {team.players.length}</p>
            <p>
              Total score:{" "}
              {team.games.reduce((acc, game) => acc + game.score, 0)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
