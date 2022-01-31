import { atom } from "jotai"

const gameOverAtom = atom({
  gameOver: false,
  game: {
    id: "",
    winnerId: "",
    activePlayer: null,
    started: true,
    captain: "mahan406",
    players: {
      "1": { id: "", score: 0, username: "" },
    },
  },
  winner: {
    id: "",
    username: "",
    user_stats: {
      id: "",
      user_id: "",
      wins: 9,
      losses: 12,
      points: 840,
    },
  },
  losers: [
    {
      id: "",
      username: "",
      user_stats: {
        id: "",
        user_id: "",
        wins: 9,
        losses: 13,
        points: 835,
      },
    },
  ],
})

export { gameOverAtom }
