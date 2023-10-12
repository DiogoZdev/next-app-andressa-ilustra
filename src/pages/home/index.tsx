import { Gallery }  from "@/components/compositions/Gallery";
import { Contact } from "@/components/layout/Contact";


export default function Home() {

  return (
    <>
      <div id="gallery">
        <Gallery/>
      </div>
      <Contact />
    </>
  );
};
