import { axios, API_URL } from "@/services"
import { overwriteAtom, userAtom } from "@/store"
import { CloseIcon } from "@chakra-ui/icons"
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react"
import { useAtom } from "jotai"
import { useUpdateAtom } from "jotai/utils"
import router, { useRouter } from "next/router"

interface DrawerProps {
  onClose: any
  isOpen: any
  color: string
  onMenuClose: any
}

export const StyledDrawer: React.FC<DrawerProps> = ({ onClose, isOpen, onMenuClose }) => {
  const router = useRouter()
  const [me, setMe] = useAtom(userAtom)
  const setOverwriteOpen = useUpdateAtom(overwriteAtom)

  function auth(path: string) {
    return me.id ? path : "/login"
  }

  async function logout(e) {
    await axios.post(`${API_URL}/user/logout`, {}, { withCredentials: true })
    await router.push("/")
    router.reload()
  }

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay>
        <DrawerContent>
          <IconButton
            aria-label="close menu"
            icon={<CloseIcon />}
            bg="none"
            pos="absolute"
            right={4}
            top={4}
            onClick={onMenuClose}
            _hover={{
              border: "none",
              textDecoration: "none",
              boxShadow: "none",
              tranform: "scale(1.1)",
            }}
            _focus={{
              boxShadow: "none",
              border: "none",
            }}
          />
          {me.username ? (
            <Box>
              <Text m=".5rem 1rem" fontSize="1.2rem" fontWeight="700">
                {me.username} 🎖{me.user_stats.points}
              </Text>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="flex-start"
              ml="1rem"
              listStyleType="none"
              flexDir="row"
              w="60vw"
            >
              <Link href="/login">Sign In</Link>
              <Link href="/register">Sign Up</Link>
            </Box>
          )}
          <Flex
            flexDir="column"
            justifyContent="space-evenly"
            h="100%"
            color="black"
            fontFamily="Tradesmith, sans-serif"
            fontSize="2rem"
            textAlign="center"
            w="100%"
          >
            <Link mx="1rem" href="/">
              Home
            </Link>
            <Link
              as="button"
              onClick={() => {
                me?.gameId ? setOverwriteOpen(true) : router.push(auth("/game/new"))
              }}
            >
              New Game
            </Link>
            <Link as="button" onClick={() => router.push(auth("/stats"))}>
              Stats
            </Link>
            {me.username && (
              <Link as="button" onClick={e => logout(e)}>
                Logout
              </Link>
            )}
          </Flex>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
