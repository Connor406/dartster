import { UseResponsiveCheck } from "@/hooks"
import { Box } from "@chakra-ui/react"

type WrapperVariant = "small" | "regular"

interface WrapperProps {
  children: any
  size?: WrapperVariant
  bgColor?: string
  bgPic?: string
  color?: string
}

export default function Wrapper({
  children,
  size = "regular",
  bgColor,
  color,
  bgPic,
}: WrapperProps) {
  const { isMobile } = UseResponsiveCheck()
  return (
    <Box
      color={color ?? "black"}
      bgImage={bgPic ?? "none"}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
    >
      <Box
        w="100vw"
        bg={bgColor ?? "white"}
        textAlign="center"
        p="4rem 2rem"
        px={size === "small" && !isMobile ? "30%" : "10%"}
        minH="100vh"
      >
        {children}
      </Box>
    </Box>
  )
}
