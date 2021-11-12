import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from 'next/app'
import '../components/ui/datepicker/date-picker.css';
import theme from "../components/ui/theme";
import Layout from "../components/ui/Layout";

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default App