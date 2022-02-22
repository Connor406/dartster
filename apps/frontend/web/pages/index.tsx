import Logo from "@/components/Motion/Logo/Logo"
import { motion } from "framer-motion"
import { Box, Flex } from "@chakra-ui/react"
import { LandingTriangle } from "@/components/Motion/LandingTriangle"
import Introduction from "@/components/Introduction"
import { useEffect } from "react"
import { API_URL, axios } from "@/services"

const MotionBox = motion(Box)

export function Index() {
  useEffect(() => {
    axios.get(`${API_URL}/traffic?location=dartmule`)
  }, [])

  return (
    <Box minH="100vh" minW="100vw" textAlign="center" overflow="clip">
      <LandingTriangle />
      <Flex h="50vh" w="100vw" justifyContent="center" alignItems="flex-end" textAlign="center">
        <Logo />
      </Flex>
      {/* <Introduction /> */}
    </Box>
  )
}

export default Index
