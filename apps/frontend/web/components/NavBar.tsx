import { axios, API_URL } from "@/services"
import { useEffect } from "react"
import { useAtom } from "jotai"
import { userAtom } from "@/store"
import { Box, LinkProps } from "@chakra-ui/layout"
import { Link } from "@chakra-ui/react"
import { useRouter } from "next/router"

const NavBar: React.FC = () => {
  const router = useRouter()
  const page = router.pathname
  const [user, setUser] = useAtom(userAtom)

  async function meQuery() {
    try {
      const { data }: any = await axios.get(`${API_URL}/user/me`, { withCredentials: true })
      if (data.user) {
        setUser(data.user)
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
        <NavLink mx="1rem" href="/">
          Home
        </NavLink>
        <NavLink href="/game/new">New Game</NavLink>
        <NavLink href="/stats">Stats</NavLink>
        {user.gameId && <NavLink href={`/game/${user.gameId}`}>Join Game</NavLink>}
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
        {user.username ? (
          <Box h="100%" display="flex" alignItems="flex-start">
            <NavLink href="/">
              {user.username} 🎖{user.user_stats.points}
            </NavLink>
            <NavLink href="/" onClick={e => logout(e)}>
              Logout
            </NavLink>
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
            <NavLink href="/login">SignIn</NavLink>
            <NavLink href="/register">SignUp</NavLink>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default NavBar

const NavLink = (props: LinkProps) => (
  <Link
    pt="1rem"
    mr="1rem"
    borderTop="5px solid transparent"
    {...props}
    _hover={{
      color: "yellow",
      borderTop: "5px solid #F1B24A",
    }}
    _visited={{
      color: "inherit",
    }}
  />
)
