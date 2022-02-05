import { userAtom } from "@/store"
import { gameOverAtom } from "@/store/gameOver"
import { inviteAtom } from "@/store/invite"
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { useAtom } from "jotai"
import { useRouter } from "next/router"

interface Props {
  players: Players
  gameId: string
}

interface Player {
  id: string
  username: string
  score: number
}

interface Players {
  [playerX: number]: Player
}

function InvitedModal() {
  const router = useRouter()
  const [invite, setInvite] = useAtom(inviteAtom)

  return (
    <Modal
      isOpen={invite.isInvited}
      onClose={() => setInvite({ isInvited: false, gameId: 0, players: {} })}
    >
      <ModalOverlay />
      <ModalContent display="flex" alignItems="center">
        <ModalHeader>{`You're invited! 🎉`}</ModalHeader>
        <ModalBody>{`${invite.players[1]?.username} invited you to play.`}</ModalBody>
        <Button
          onClick={() => {
            router.push(`/game/${invite.gameId}`)
            setInvite({ isInvited: false, gameId: 0, players: {} })
          }}
          mb="1rem"
        >
          Join Game
        </Button>
      </ModalContent>
    </Modal>
  )
}

export default InvitedModal
