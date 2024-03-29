import Head from "next/head"
import NavBar from "@/components/NavBar"
import theme from "@/theme"
import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { useGlobalSockets } from "@/hooks/useSockets"

function CustomApp({ Component, pageProps }: AppProps) {
  useGlobalSockets()
  return (
    <>
      <Head>
        <title>Dart Mule. The best damn dart score keeping app in the World.</title>
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
