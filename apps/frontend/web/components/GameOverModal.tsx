import { userAtom } from "@/store"
import { gameAtom } from "@/store/game"
import { gameOverAtom } from "@/store/gameOver"
import { getUserPositionById } from "@/util/parse"
import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useAtomValue } from "jotai/utils"

interface Props {
  isOpen: boolean
  onClose: any
  isWinner: boolean
}

function GameOver({ isOpen, onClose, isWinner }: Props) {
  const me = useAtomValue(userAtom)
  const gameOver = useAtomValue(gameOverAtom)
  const winner = gameOver.winner

  const messages = {
    winner: {
      header: "Congrats on a hard fought victory! 👏",
      body: `You earned 100 points, putting you at ${me.user_stats.points}!
				This puts you at ${me.user_stats.wins} wins and ${me.user_stats.losses} losses. Enjoy the win!
			`,
    },
    loser: {
      header: `You fought hard, but ${winner?.username} is the winner! 👏`,
      body: `You lost 5 points, putting you at ${me.user_stats.points}!
				This puts you at ${me.user_stats.wins} wins and ${me.user_stats.losses} losses. Keep your head up and get 'em next time!
			`,
    },
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent display="flex" alignItems="center">
        <ModalHeader>{isWinner ? messages.winner.header : messages.loser.header}</ModalHeader>
        <ModalBody>{isWinner ? messages.winner.body : messages.loser.body}</ModalBody>
        <Button onClick={onClose} mb="1rem">
          End Game
        </Button>
      </ModalContent>
    </Modal>
  )
}

export default GameOver
