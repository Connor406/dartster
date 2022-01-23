import { AppProps } from "next/app"
import Head from "next/head"
import NavBar from "@/components/NavBar"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "@/theme"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to dart-web!</title>
      </Head>
      <div>
        <ChakraProvider theme={theme}>
          <main>
            <NavBar />
            <Component {...pageProps} />
          </main>
        </ChakraProvider>
      </div>
    </>
  )
}

export default CustomApp
