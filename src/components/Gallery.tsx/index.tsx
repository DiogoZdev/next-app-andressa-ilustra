import { ProjectsList, Project } from "@/interfaces/projectsList.interface";
import { useEffect, useState } from "react";

export const Gallery = () => {
  const [projects, setProjects] = useState<Project[]>([]);

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
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          flex-wrap: wrap;
          width: 100%;
          justify-content: center;
          background-color: #eee;
        }

        .gallery-image-container {
          position: relative;
          aspect-ratio:34/25;
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

        .gallery-image-container:hover .image{
          transform: scale(1.2) rotate(1deg);
        }
      `}</style>

      <div className="gallery">
        {projects.map((project) => (
          <div className="gallery-image-container" key={project.titulo}>
            <img src={project.thumbnail} alt={project.titulo} className="image"/>
          </div>
        ))}
      </div>
    </>
  );
};
