import DesktopNav from "./Desktop/Nav"
import InvitedModal from "./InvitedModal"
import OverwriteModal from "./OverwriteGame"
import { UseResponsiveCheck } from "@/hooks"
import { API_URL, axios } from "@/services"
import { mobileNavAtom, userAtom } from "@/store"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { StyledDrawer } from "./Mobile/NavDrawer"

const NavBar: React.FC = () => {
  const router = useRouter()
  const page = router.pathname
  const [me, setMe] = useAtom(userAtom)
  const [mobileNavOpen, setMobileNavOpen] = useAtom(mobileNavAtom)
  const { isMobile } = UseResponsiveCheck()

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
    <Box>
      {isMobile ? (
        <>
          <IconButton
            boxShadow="none"
            fontSize="1.8rem"
            aria-label="menu"
            icon={<HamburgerIcon />}
            color={page === "/" ? "white" : "gold"}
            bg="none"
            border="none"
            pos="fixed"
            right={4}
            top={4}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            _hover={{
              textDecoration: "none",
              transform: "scale(1.1)",
              color: "gold",
            }}
            _focus={{
              boxShadow: "none",
              bg: "none",
            }}
          />
          <StyledDrawer
            onMenuClose={() => setMobileNavOpen(false)}
            color="black"
            onClose={() => setMobileNavOpen(false)}
            isOpen={mobileNavOpen}
          />
          {/* <AnimatePresence>
                {isLoading && <Loader isMobile={isMobile} key="key" />}
              </AnimatePresence> */}
        </>
      ) : (
        <DesktopNav />
      )}
      <InvitedModal />
      <OverwriteModal />
    </Box>
  )
}

export default NavBar
