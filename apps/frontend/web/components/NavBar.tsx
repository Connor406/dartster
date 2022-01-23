import axios, { API_URL } from "../services"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAtom } from "jotai"
import { userAtom } from "../store"
import styled from "styled-components"
import { Box } from "@chakra-ui/layout"
import { Link } from "@chakra-ui/react"

const NavBar: React.FC = () => {
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
  }

  useEffect(() => {
    meQuery()
  }, [])

  return (
    <Box
      bg="green"
      color="black"
      pos="fixed"
      display="flex"
      w="100vw"
      left="0px"
      top="0px"
      alignItems="center"
      zIndex="112"
    >
      <Box
        listStyleType="none"
        display="flex"
        flexDir="row"
        w="60vw"
        justifyContent="flex-start"
        bg="red"
      >
        <Link href="/">Home</Link>
        <Link href="/game/new">New Game</Link>
        <Link href="/stats"> Stats</Link>
        {user.gameId && <Link href={`/game/${user.game.id}?user=${user.id}`}>Join Game</Link>}
      </Box>
      <UserInfo>
        {user.username ? (
          <div>
            <User href="">
              {user.username} 🎖{user.user_stats.points}
            </User>
            <User href="" onClick={e => logout(e)}>
              Logout
            </User>
          </div>
        ) : (
          <div>
            <User href="/login">SignIn</User>
            <User href="/register">SignUp</User>
          </div>
        )}
      </UserInfo>
    </Box>
  )
}

export default NavBar

// const Link = styled.a`
//   margin: 1rem;
//   padding: 0px;
//   text-decoration: none;
//   transition: 0.2s ease-in-out;
//   :visited {
//     color: green;
//   }
//   :hover {
//     transform: scale(1.1);
//   }
// `
const UserInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`

const User = styled.a`
  margin-right: 30px;
  text-decoration: none;
  transition: 0.1s ease-in-out;
  :visited {
    color: inherit;
  }
  :hover {
    transform: scale(1.2);
  }
`
