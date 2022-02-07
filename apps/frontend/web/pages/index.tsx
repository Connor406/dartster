import Logo from "@/components/Motion/Logo/Logo"
import Image from "next/image"
import { motion } from "framer-motion"
import { Box, Text } from "@chakra-ui/react"

const MotionText = motion(Text)

export function Index() {
  return (
    <Box h="100vh" w="100vw">
      <Box pos="fixed" h="100vh" w="100vw" overflow="hidden" zIndex="-1">
        <Image
          src="/neon2.svg"
          height="100vh"
          width="100vw"
          layout="fill"
          objectFit="cover"
          alt="bg"
        />
      </Box>
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
    </Box>
  )
}

export default Index
