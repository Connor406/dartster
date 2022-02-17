import { Box, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const MotionBox = motion(Box)
const MotionText = motion(Text)

function Introduction() {
  const phrases = ["play darts", "keep score", "invite friends", "earn points"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIndex(index < phrases.length - 1 ? index + 1 : 0)
    }, 3000)
    console.log(index)
  }, [index])

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
      color="neonBlue"
      fontFamily="sans-serif"
      fontSize="3rem"
      textShadow="8px 8px 10px #83eeffb5"
      mt="3rem"
      display="flex"
      w="100%"
      justifyContent="center"
    >
      <MotionText color="neonBlue" w="50vw">
        {phrases[index]}
      </MotionText>
    </MotionBox>
  )
}

export default Introduction
