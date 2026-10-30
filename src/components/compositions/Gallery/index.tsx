import s from "./style.module.scss";
import { IProjectsList, IProject } from "@/interfaces/project.interface";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { Display } from "../Display";
import useProject from "@/hooks/useProject";

const GALLERY_URL =
  "https://raw.githubusercontent.com/andressadesign/files/main/projects.json";

export const Gallery = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { project, openProject, closeProject } = useProject();

  useEffect(() => {
    let cancelled = false;

    async function loadProjects() {
      try {
        const { projects } = await fetch(GALLERY_URL).then(
          (res) => res.json() as Promise<IProjectsList>
        );

        if (!cancelled) setProjects(projects);
      } catch (error) {
        console.error("Não foi possível carregar os projetos.", error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadProjects();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={s.gallery} aria-busy={isLoading}>
      {isLoading &&
        Array.from({ length: 6 }).map((_, index) => (
          <div className={`${s.galleryImageContainer} ${s.skeleton}`} key={index} />
        ))}

      {projects.map((p, index) => (
        <button
          type="button"
          className={s.galleryImageContainer}
          key={p.titulo}
          onClick={() => openProject(p)}
          aria-label={`Ver projeto ${p.titulo}`}
        >
          <Image
            src={p.imagens[0]}
            alt={p.titulo}
            fill
            priority={index < 3}
            sizes="(min-width: 1024px) 33vw, (min-width: 550px) 50vw, 100vw"
            className={s.image}
          />
          <span className={s.hoverLabel}>{p.titulo}</span>
        </button>
      ))}

      {project && (
        <AnimatePresence>
          <Display project={project} close={closeProject} />
        </AnimatePresence>
      )}
    </div>
  );
};
