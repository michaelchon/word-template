import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/paragraph.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Осмотр терапевта</title>
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
