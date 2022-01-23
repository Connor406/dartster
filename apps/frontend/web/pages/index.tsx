import { motion } from "framer-motion"
import { Box, Text } from "@chakra-ui/react"

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
    backgroundImage: `linear-gradient(217deg, ${colors.green}, ${colors.lightGreen} 100%)`,
    opacity: 1,
  },
}

const MotionBox = motion(Box)
const MotionText = motion(Text)

export function Index() {
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
        initial={{ x: -700, scale: 3 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        color="white"
        fontSize="10rem"
        fontFamily="Lansdowne Slanted"
      >
        Dartster
      </MotionText>
    </MotionBox>
  )
}

export default Index

//

{
  /* <MountainSvg />
      <TitleBox>
        <Title
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              type: "spring",
              delay: 1,
            },
          }}
          initial={{
            opacity: 0,
            x: 300,
            scale: 40,
          }}
        >
          app name here
        </Title>
      </TitleBox> */
}
