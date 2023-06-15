import { ProjectsList, Project } from "@/interfaces/projectsList.interface";
import { useEffect, useState } from "react";
import { Display } from "../Display";
import useProject from "@/hooks/useProject";

export const Gallery = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { project, openProject, closeProject } = useProject();

  useEffect(() => {
    const projects = loadProjects();
  }, []);

  async function loadProjects() {
    const { projects } = await fetch(
      "https://raw.githubusercontent.com/andressadesign/files/main/projects.json"
    ).then((res) => res.json() as Promise<ProjectsList>);

    setProjects(projects);
  }

  return (
    <>
      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          flex-wrap: wrap;
          width: 100%;
          justify-content: center;
          background-color: #eee;
        }

        .gallery-image-container {
          position: relative;
          aspect-ratio: 34/25;
          overflow: hidden;
          cursor: pointer;
        }

        .image {
          background-color: #f4f4f4;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: all 0.2s ease-in-out;
        }

        .gallery-image-container:hover .image {
          transform: scale(1.2) rotate(1deg);
        }
      `}</style>

        <div className="gallery">
          {projects.map((p) => (
            <div
              className="gallery-image-container"
              key={p.titulo}
              onClick={() => openProject(p)}
            >
              <img
                src={p.thumbnail}
                alt={p.titulo}
                className="image"
              />
            </div>
          ))}
          {project && <Display project={project} close={closeProject} />}
        </div>
    </>
  );
};
