import { gameAtom } from "@/store/game"
import { gameOverAtom } from "@/store/gameOver"
import { useUpdateAtom } from "jotai/utils"
import { io } from "socket.io-client"

export const socket = io(process.env.NEXT_PUBLIC_API_URL)

export function useSockets() {
  const setGame = useUpdateAtom(gameAtom)
  const setGameOver = useUpdateAtom(gameOverAtom)

  socket.on("score", ({ game }) => {
    setGame(game)
  })

  socket.on("gameOver", ({ game, winner, losers }) => {
    setGameOver({ gameOver: true, game, winner, losers })
    setGame(game)
  })
}
