import { axios, API_URL } from "@/services"
import { useEffect } from "react"
import { useAtom } from "jotai"
import { overwriteAtom, userAtom } from "@/store"
import { Box, LinkProps } from "@chakra-ui/layout"
import { Link } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useUpdateAtom } from "jotai/utils"

const DesktopNav: React.FC = () => {
  const router = useRouter()
  const page = router.pathname
  const [me, setMe] = useAtom(userAtom)
  const setOverwriteOpen = useUpdateAtom(overwriteAtom)

  async function meQuery() {
    try {
      const { data }: any = await axios.get(`${API_URL}/user/me`, { withCredentials: true })
      if (data.user) {
        setMe(data.user)
      }
    } catch (error) {
      if (error) console.error(error)
    }
  }

  async function logout(e) {
    e.preventDefault()
    await axios.post(`${API_URL}/user/logout`, {}, { withCredentials: true })
    router.reload()
  }

  useEffect(() => {
    meQuery()
  }, [router.pathname])

  function auth(path: string) {
    return me.id ? path : "/login"
  }

  return (
    <Box
      h="4rem"
      bgGradient={page === "/" ? "inherit" : `linear-gradient(140deg, green, lightGreen )`}
      pos="fixed"
      display="flex"
      w="100vw"
      left="0px"
      top="0px"
      alignItems="flex-start"
      zIndex="112"
    >
      <Box
        listStyleType="none"
        display="flex"
        flexDir="row"
        w="60vw"
        justifyContent="flex-start"
        color="white"
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
        <Link href={auth("/stats")}>Stats</Link>
        {me.gameId && <Link href={`/game/${me.gameId}`}>Join Game</Link>}
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        listStyleType="none"
        flexDir="row"
        w="60vw"
        h="100%"
        color="white"
      >
        {me.username ? (
          <Box h="100%" display="flex" alignItems="flex-start">
            <Link href="/">
              {me.username} 🎖{me.user_stats.points}
            </Link>
            <Link href="/" onClick={e => logout(e)}>
              Logout
            </Link>
          </Box>
        ) : (
          <Box
            display="flex"
            justifyContent="flex-end"
            listStyleType="none"
            flexDir="row"
            w="60vw"
            h="100%"
          >
            <Link href="/login">SignIn</Link>
            <Link href="/register">SignUp</Link>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default DesktopNav
