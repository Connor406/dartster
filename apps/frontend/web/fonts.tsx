import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;800&display=swap");
      /* latin */
      @font-face {
        font-family: "Comodo";
        src: url("./public/ComodoVintage.otf");
      }
      /* latin */
      @font-face {
        font-family: "Logawa";
        src: url("web/src/public/Logawa.otf");
      }
      /* latin */
      @font-face {
        font-family: "Lansdowne";
        src: url("web/src/public/Lansdowne.ttf");
      }
      @font-face {
        font-family: "Lansdowne Slanted";
        src: url("web/src/public/Lansdowne Slanted.otf")
      }
  `}
  />
)

export default Fonts
