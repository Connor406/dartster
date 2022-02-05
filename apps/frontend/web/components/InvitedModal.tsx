import { inviteAtom } from "@/store"
import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { useRouter } from "next/router"

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
