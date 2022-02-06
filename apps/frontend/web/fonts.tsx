import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;800&display=swap");
      /* latin */
      @font-face {
        font-family: "Comodo";
        src: url("/fonts/ComodoVintage.otf");
      }
      @font-face {
        font-family: "Sanpaullo";
        src: url("web/public/fonts/Sanpaullo.otf");
      }
      /* latin */
      @font-face {
        font-family: "Lansdowne";
        src: url("/fonts/Lansdowne.ttf");
      }
      @font-face {
        font-family: "Lansdowne Slanted";
        src: url("/fonts/Lansdowne Slanted.otf")
      }
  `}
  />
)

export default Fonts
