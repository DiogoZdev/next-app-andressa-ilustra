import { Footer } from "@/components/layout/Footer";
import { Menu } from "@/components/layout/Menu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
    <Head>
      <link rel="icon" href="/logo-feather.svg" sizes="32x32, 64x64, 128x128" />
      <title>Andressa Araujo</title>
    </Head>
    <Menu/>
    <Component {...pageProps} />
    <Footer />
    </>
  );
}