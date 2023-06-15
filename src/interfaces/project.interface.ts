export interface ProjectsList {
  projects: Project[];
}

export interface Project {
  titulo:    string;
  tag:       string;
  descricao: string;
  criado:    string;
  imagens:   string[];
  thumbnail: string;
  categoria: Categoria[];
}

export enum Categoria {
  All = "all",
  Drawings = "drawings",
  VisualID = "visual-id",
}