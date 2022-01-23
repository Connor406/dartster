import { atom } from "jotai"

const gameAtom = atom({
  activePlayer: "",
  id: "",
  captain: "",
  started: false,
  winnerId: "",
})

export { gameAtom }
