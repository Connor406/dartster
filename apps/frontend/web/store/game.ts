import { atom } from "jotai"

const gameAtom = atom({
  id: "",
  winnerId: null,
  activePlayer: "",
  started: false,
  captain: "",
  players: { player1: { username: "player 1", score: 501 } },
})

export { gameAtom }
