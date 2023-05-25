import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Navigation";
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