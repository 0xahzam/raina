import '../styles/globals.css'
import { HydrationProvider, Server, Client } from "react-hydration-provider";


// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <HydrationProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </HydrationProvider>
  )
}

export default MyApp