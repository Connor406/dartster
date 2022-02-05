import { atom } from "jotai"

const inviteAtom = atom({
  isInvited: false,
  players: {},
  gameId: 0,
})

export { inviteAtom }
