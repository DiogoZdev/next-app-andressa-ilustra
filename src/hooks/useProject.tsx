import { IProject } from "@/interfaces/project.interface";
import { useState } from "react";

export default function useProject() {
  const [project, setProject] = useState<IProject | null>(null);

  function openProject(project: IProject) {
    setProject(project);
  }

  function closeProject() {
    setProject(null);
  }

  return { project, openProject, closeProject };
}
