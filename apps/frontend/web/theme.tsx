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
        _focus: {
          boxShadow: "none",
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
    Link: {
      baseStyle: {
        pt: "1rem",
        mr: "1rem",
        borderTop: "5px solid transparent",
        _hover: {
          color: "yellow",
          borderTop: "5px solid #F1B24A",
          borderBottom: "none",
          textDecoration: "none",
        },
        _visited: {
          color: "inherit",
        },
        _focus: {
          outline: "none",
          boxShadow: "none",
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
    Input: {
      baseStyle: {
        mb: "1rem",
      },
      sizes: {},
      variants: {},
    },
  },
})

export default theme
