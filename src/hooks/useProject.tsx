import { Project } from "@/interfaces/project.interface"
import { useState } from "react"

export default function useProject() {

  const [project, setProject] = useState<Project | null>(null)

  function openProject(project: Project) {
    setProject(project)
  }

  function closeProject() {
    setProject(null)
  }

  return { project, openProject, closeProject }
}