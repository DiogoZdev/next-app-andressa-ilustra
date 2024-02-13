export interface IProjectsList {
  projects: IProject[];
}

export interface IProject {
  titulo: string;
  tag: string;
  descricao: string;
  criado: string;
  imagens: string[];
  thumbnail: string;
  categoria: string[];
}
