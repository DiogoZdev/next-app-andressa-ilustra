import s from "./style.module.scss";
import { IProjectsList, IProject } from "@/interfaces/project.interface";
import { useEffect, useState } from "react";
import { Display } from "../Display";
import useProject from "@/hooks/useProject";

export const Gallery = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { project, openProject, closeProject } = useProject();

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const { projects } = await fetch(
      "https://raw.githubusercontent.com/andressadesign/files/main/projects.json"
    ).then((res) => res.json() as Promise<IProjectsList>);

    setProjects(projects);
  }

  return (
    <div className={s.gallery}>
      {projects.map((p) => (
        <div
          className={s.galleryImageContainer}
          key={p.titulo}
          onClick={() => openProject(p)}
        >
          <img src={p.imagens[0]} alt={p.titulo} className={s.image} />
        </div>
      ))}
      {project && <Display project={project} close={closeProject} />}
    </div>
  );
};
