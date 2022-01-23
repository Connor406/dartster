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
  return (
    <Box
      color={color ?? "white"}
      bgImage={bgPic ?? "none"}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="center"
    >
      <Box
        w="100vw"
        bg={bgColor ?? "white"}
        textAlign="center"
        size={size === "small" ? "20%" : "10%"}
        bgColor={bgColor}
      >
        {children}
      </Box>
    </Box>
  )
}
