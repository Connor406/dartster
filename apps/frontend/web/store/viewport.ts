import { atom } from "jotai"

const viewportAtom = atom({
  isInvited: false,
  players: {},
  gameId: 0,
})

export { viewportAtom }
