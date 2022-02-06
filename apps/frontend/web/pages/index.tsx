import { motion } from "framer-motion"
import { Box, Text } from "@chakra-ui/react"
import { UseResponsiveCheck } from "@/hooks"

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

const layer1 = {
  hidden: {
    pathLength: 0,
    backgroundImage: `linear-gradient(140deg, ${colors.green}, ${colors.darkGreen} 20.71%)`,
    opacity: 1,
  },
  visible: {
    pathLength: 1,
    backgroundImage: `linear-gradient(to left, ${colors.lightGreen}, ${colors.darkGreen} 120%)`,
    opacity: 1,
  },
}

export function Index() {
  const { isMobile, isTablet } = UseResponsiveCheck()

  return (
    <MotionBox
      p="4rem 2rem"
      w="100vw"
      h="100vh"
      variants={layer1}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <MotionText
        position="relative"
        zIndex="2"
        initial={{ x: -700, scale: 3 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        color="white"
        fontSize={isMobile ? "8rem" : "11rem"}
        fontFamily="Lansdowne Slanted"
        textShadow="8px 8px 10px #164A41"
        lineHeight={isMobile && "7rem"}
      >
        Dart Mule
      </MotionText>
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
      {!isMobile && (
        <Box
          zIndex="1"
          w="50vw"
          h="calc(100vh - 8rem)"
          borderTopLeftRadius="40vw"
          boxShadow="2xl"
          bg="lightGreen"
          pos="absolute"
          right="0px"
          top="8rem"
        />
      )}
    </MotionBox>
  )
}

export default Index
