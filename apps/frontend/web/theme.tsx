import { extendTheme } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = { heading: "Comodo" }

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
    yellow: "#F1B24A",
    black: "#12151f",
    white: "#ffffff",
  },
  fonts,
  breakpoints,
})

export default theme
