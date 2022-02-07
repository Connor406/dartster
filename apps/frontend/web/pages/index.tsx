import Logo from "@/components/Motion/Logo/Logo"
import { motion } from "framer-motion"
import { Box, Flex, Text } from "@chakra-ui/react"
import { LandingTriangle } from "@/components/Motion/LandingTriangle"

const MotionText = motion(Text)

export function Index() {
  return (
    <Box minH="100vh" minW="100vw" textAlign="center">
      <LandingTriangle />
      <Flex h="50vh" w="100vw" justifyContent="center" alignItems="flex-end" textAlign="center">
        <Logo />
      </Flex>
      <MotionText
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
        color="neonBlue"
        fontFamily="sans-serif"
        textShadow="8px 8px 10px #164A41"
        mt="3rem"
      >
        A work in progress...
      </MotionText>
    </Box>
  )
}

export default Index
