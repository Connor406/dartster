import { inviteAtom, gameOverAtom, userAtom, gameAtom } from "@/store"
import { useAtomValue, useUpdateAtom } from "jotai/utils"
import { io } from "socket.io-client"

export const socket = io(process.env.NEXT_PUBLIC_API_URL)

export function useGameSockets() {
  const setGame = useUpdateAtom(gameAtom)
  const setGameOver = useUpdateAtom(gameOverAtom)

  socket.on("score", ({ game }) => {
    setGame(game)
  })

  socket.on("gameOver", ({ game, winner, losers }) => {
    setGameOver({ gameOver: true, game, winner, losers })
    console.log({ losers })
    setGame(game)
  })
}

export function useGlobalSockets() {
  const me = useAtomValue(userAtom)
  const setIsInvited = useUpdateAtom(inviteAtom)
  socket.on("newGame", ({ players, gameId }) => {
    if (players[1].username === me.username) return
    Object.values(players).forEach((p: any) => {
      if (p.username === me.username) {
        console.log("invited!")
        setIsInvited({ isInvited: true, players, gameId })
      }
    })
  })
}
