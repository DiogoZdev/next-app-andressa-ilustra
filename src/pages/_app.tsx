import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
    <Nav/>
    <Component {...pageProps} />
    <Footer />
    </>
  );
}