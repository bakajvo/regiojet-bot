import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from 'next/app'
import '../components/ui/datepicker/date-picker.css';
import theme from "../components/ui/theme";

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App