import { Project } from "@/interfaces/project.interface";
import s from "./style.module.scss";
import { motion } from "framer-motion";
import { Button } from "@/components/basics/Button";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

interface DisplayProps {
  project: Project;
  close: () => void;
}

export const Display = ({ project, close }: DisplayProps) => {
  return (
    <motion.div
      className={s.card}
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, translateY: 500 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={s.buttonClose}>
        <Button
          onClick={close}
          variant="danger"
          icon={<X size={22} />}
        ></Button>
      </div>

      
      <div className={s.cardInfo}>
        <h3>{project.titulo}</h3>
        <hr className={s.separator} />
        <br />
        {project.descricao.split("//").map((paragraph: string) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className={s.cardImages}>
        {project.imagens.map((img: string) => (
          <div className={s.imgContainer} key={img}>
            <img src={img} alt={img} />
          </div>
        ))}
        <div className={s.displayFooter}>
          <p>Obrigada!</p>
          <Image
            src="/logo-horizontal.svg"
            width={180}
            height={30}
            alt="Andressa Araujo"
            className={s.image}
          />
          <p>cnpj 40.068.642/0001-47</p>
        </div>
      </div>
    </motion.div>
  );
};
