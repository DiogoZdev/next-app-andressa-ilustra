import Head from "next/head";
import { Gallery } from "@/components/compositions/Gallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>Projetos — Andressa Araujo</title>
      </Head>
      <div id="gallery">
        <Gallery />
      </div>
    </>
  );
}
