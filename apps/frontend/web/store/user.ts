import { atom } from "jotai"

const userAtom = atom({
  id: "",
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  score: 0,
  gameId: "",
  user_stats: { id: "", losses: 0, points: 0, wins: 0, user_id: "" },
  game: { activePlayer: "", id: "", captain: "", started: true, winnerId: "" },
})

export { userAtom }
