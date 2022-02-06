import { atom } from "jotai"

const inviteAtom = atom({
  isInvited: false,
  players: {},
  gameId: 0,
  captain: "",
})

const overwriteAtom = atom(false)
const mobileNavAtom = atom(false)

export { inviteAtom, overwriteAtom, mobileNavAtom }
