import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = { heading: "Lansdowne Slanted" }

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const theme = extendTheme({
  colors: {
    green: "#4D774E",
    darkGreen: "#164A41",
    lightGreen: "#9DC88D",
    gold: "#f8dfb7",
    yellow: "#F1B24A",
    black: "#12151f",
    white: "#ffffff",
  },
  fonts,
  breakpoints,
  components: {
    Button: {
      baseStyle: {
        fontFamily: "sans-serif",
        color: "black",
        bg: "gold",
        border: "5px solid white",
        boxShadow: "md",
        _hover: {
          boxShadow: "xs",
          transform: "scale(0.98)",
        },
      },
      sizes: {
        xl: {
          h: 14,
          minW: 14,
          fontSize: "2xl",
          px: 8,
        },
      },
      variants: {},
    },
  },
})

export default theme
