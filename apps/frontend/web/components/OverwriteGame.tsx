import { axios } from "@/services"
import { overwriteAtom, userAtom } from "@/store"
import { Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { useAtomValue } from "jotai/utils"
import { useRouter } from "next/router"

function OverwriteModal() {
  const router = useRouter()
  const me = useAtomValue(userAtom)
  const [overwriteOpen, setOverwriteOpen] = useAtom(overwriteAtom)

  return (
    <Modal isOpen={overwriteOpen} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent display="flex" alignItems="center">
        <ModalHeader>Warning!</ModalHeader>
        <ModalBody>This will overwrite your unfinished game.</ModalBody>
        <Button
          onClick={() => {
            router.push("/game/new")
            setOverwriteOpen(false)
            axios.delete(`/game?id=${me.gameId}`)
          }}
          mb="1rem"
        >
          Continue?
        </Button>
      </ModalContent>
    </Modal>
  )
}

export default OverwriteModal
