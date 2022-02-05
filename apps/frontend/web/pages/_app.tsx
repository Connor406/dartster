import Head from "next/head"
import NavBar from "@/components/NavBar"
import theme from "@/theme"
import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { useGlobalSockets } from "@/services"

function CustomApp({ Component, pageProps }: AppProps) {
  useGlobalSockets()
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
