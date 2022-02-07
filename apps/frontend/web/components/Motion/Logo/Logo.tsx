import { UseResponsiveCheck } from "@/hooks"
import { Box, Flex } from "@chakra-ui/react"
import { Dart } from "./Dart"
import { Mule } from "./Mule"

interface Props {}

function Logo({}: Props) {
  const { isMobile } = UseResponsiveCheck()

  return (
    <Flex
      w={isMobile ? "10rem" : "23rem"}
      h="8rem"
      justifyContent="center"
      flexDir={isMobile ? "column" : "row"}
    >
      <Dart />
      <Mule />
    </Flex>
  )
}

export default Logo
