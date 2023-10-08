import { Header } from "@/components/layout/Header";
import { Gallery }  from "@/components/compositions/Gallery";
import { Contact } from "@/components/layout/Contact";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    scrollToGalleryAfterTwoSeconds();
  })

  function scrollToGalleryAfterTwoSeconds() {
    setTimeout(() => {
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
    }, 3000);
  }

  return (
    <>
      <Header />
      <div id="gallery">
        <Gallery/>
      </div>
      <Contact />
    </>
  );
};
