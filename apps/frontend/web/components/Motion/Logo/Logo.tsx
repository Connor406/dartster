import { UseResponsiveCheck } from "@/hooks"
import { Box, Flex } from "@chakra-ui/react"
import { Dart } from "./Dart"
import { Mule } from "./Mule"

interface Props {}

function Logo({}: Props) {
  const { isMobile, isTablet } = UseResponsiveCheck()

  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      flexDir={isMobile ? "column" : "row"}
    >
      <Dart />
      <Mule />
    </Flex>
  )
}

export default Logo
