import { Project } from "@/interfaces/projectsList.interface";
import s from "./style.module.scss";

interface DisplayProps {
  project: Project;
  close: () => void;
}

export const Display = ({ project, close }: DisplayProps) => {

  return (
      <div className={s.overlay} onClick={ close }>
        <div className={s.card} onClick={ (e) => e.stopPropagation() }>
          <h3>{ project.titulo }</h3>
          <br />
          { project.descricao.split("//").map((paragraph) => <p>{paragraph}</p>) }
          { project.imagens.map((img) => 
            <div className={s.imgContainer}>
              <img src={img} alt={img} />
            </div>
          )}
        </div>
      </div>
  )
}