import { extendTheme } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const Fonts = () => (
  <Global
    styles={`
      @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;800&display=swap");
      @font-face {
        font-family: "Comodo";
        src: url("./public/ComodoVintage.otf");
      }
  `}
  />
)

const fonts = { heading: "Comodo" }

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const theme = extendTheme({
  colors: {
    black: "#12151f",
    green: "#05f4b7",
    purple: "#371bb1",
  },
  fonts,
  breakpoints,
})

export default theme
