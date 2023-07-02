import { Header } from "@/components/layout/Header";
import { Gallery }  from "@/components/compositions/Gallery";

import { GetStaticProps } from "next";
import { ProjectsList } from "@/interfaces/project.interface";
import { Contact } from "@/components/layout/Contact";

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await fetch(
    "https://raw.githubusercontent.com/andressadesign/files/main/projects.json"
  ).then((res) => res.json() as Promise<ProjectsList>);

  console.log(projects)

  return { props: { projects } }
}

export const Home = () => {
  return (
    <>
      <Header />
      <Gallery />
      <Contact />
    </>
  );
};
