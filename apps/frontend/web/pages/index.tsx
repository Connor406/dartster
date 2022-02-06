import { motion } from "framer-motion"
import { Box, Flex, Text } from "@chakra-ui/react"
import { UseResponsiveCheck } from "@/hooks"
import Logo from "@/components/Motion/Logo/Logo"

const MotionBox = motion(Box)
const MotionText = motion(Text)

const colors = {
  green: "rgba(77, 119, 78, 1)",
  darkGreen: "rgba(22, 74, 65, 1)",
  lightGreen: "rgba(157, 200, 141, 1)",
  yellow: "rgba(241, 178, 74, 1)",
  black: "rgba(18, 21, 31, 1)",
  white: "rgba(255, 255, 255, 1)",
}

export function Index() {
  const { isMobile, isTablet } = UseResponsiveCheck()

  return (
    <MotionBox
      p="4rem 2rem"
      w="100vw"
      h="100vh"
      bgImage="url('/neon2.svg')"
      bgPosition="cover"
      bgRepeat="no-repeat"
      textAlign="center"
    >
      <Logo />
      <MotionText
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
        color="white"
        fontFamily="sans-serif"
        textShadow="8px 8px 10px #164A41"
      >
        A work in progress...
      </MotionText>
    </MotionBox>
  )
}

export default Index
