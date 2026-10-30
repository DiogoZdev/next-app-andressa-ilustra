import { Footer } from "@/components/layout/Footer";
import { Menu } from "@/components/layout/Menu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Contact } from "@/components/layout/Contact";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/logo-feather.svg"
          sizes="32x32, 64x64, 128x128"
        />
        <meta
          name="description"
          content="Andressa Araujo — ilustração, design de identidade visual e outras coisas legais."
        />
        <meta name="theme-color" content="#1a2e28" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Andressa Araujo" />
        <meta
          property="og:title"
          content="Andressa Araujo — Ilustração & Design"
        />
        <meta
          property="og:description"
          content="Ilustrações, design de identidade visual e outras coisas legais."
        />
        <title>Andressa Araujo — Ilustração &amp; Design</title>
      </Head>

      <Menu />
      <main>
        <Component {...pageProps} />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
