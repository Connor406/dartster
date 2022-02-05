import { atom } from "jotai"

const inviteAtom = atom({
  isInvited: false,
  players: {},
  gameId: 0,
  captain: "",
})

const overwriteAtom = atom(false)

export { inviteAtom, overwriteAtom }
