import {ColorModeScript} from "@chakra-ui/react"
import Document, {Html, Head, Main, NextScript} from 'next/document'
import theme from "../components/ui/theme";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang={'cs'}>
                <Head/>
                <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument