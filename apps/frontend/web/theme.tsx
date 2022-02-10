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
    neonPink: "#ff37d4",
    pink: "#ff37d497",
    neonBlue: "#83EEFF",
    blue: "#83eeffb5",
    lightOff: "#29484d",
    black: "#12151f",
    blackOpac: "#12151fc3",
    white: "#ffffff",
  },
  fonts,
  breakpoints,
  components: {
    // Button: {
    //   baseStyle: {
    //     fontFamily: "sans-serif",
    //     color: "black",
    //     boxShadow: "md",
    //     _hover: {
    //       boxShadow: "xs",
    //       transform: "scale(0.98)",
    //     },
    //     _focus: {
    //       boxShadow: "none",
    //     },
    //   },
    //   sizes: {
    //     xl: {
    //       h: 14,
    //       minW: 14,
    //       fontSize: "2xl",
    //       px: 8,
    //     },
    //   },
    //   variants: {},
    // },
    Link: {
      baseStyle: {
        pt: "1rem",
        mr: "1rem",
        borderTop: "5px solid transparent",
        _hover: {
          color: "neonBlue",
          borderTop: "5px solid #83EEFF",
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
        border: "2px solid pink",
        borderColor: "neonBlue",
        _hover: {
          borderColor: "pink",
        },
        _focus: {
          borderColor: "neonPink",
        },
      },
      sizes: {},
      variants: {},
    },
  },
})

export default theme
