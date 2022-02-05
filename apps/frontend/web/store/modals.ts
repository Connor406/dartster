import { atom } from "jotai"

const inviteAtom = atom({
  isInvited: false,
  players: {},
  gameId: 0,
})

const overwriteAtom = atom(false)

export { inviteAtom, overwriteAtom }
