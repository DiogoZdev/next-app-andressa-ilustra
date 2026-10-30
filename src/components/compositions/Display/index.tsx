import { IProject } from "@/interfaces/project.interface";
import s from "./style.module.scss";
import { motion } from "framer-motion";
import { Button } from "@/components/basics/Button";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect } from "react";

interface DisplayProps {
  project: IProject;
  close: () => void;
}

export const Display = ({ project, close }: DisplayProps) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close]);

  return (
    <motion.div
      className={s.card}
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div className={s.buttonClose}>
        <Button
          onClick={close}
          variant="danger"
          icon={<X size={22} />}
          ariaLabel="Fechar projeto"
        />
      </div>

      <div className={s.cardInfo}>
        <h3 id="project-title">{project.titulo}</h3>
        <hr className={s.separator} />
        {project.descricao.split("//").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className={s.cardImages}>
        {project.imagens.map((img, index) => {
          if (!img.includes("embed")) {
            return (
              <div className={s.imgContainer} key={img}>
                {/* Project images have unknown aspect ratios; optimized layout would crop them. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${project.titulo} — imagem ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          }

          return (
            <iframe
              className={s.embed}
              src={img}
              key={img}
              title={`${project.titulo} — vídeo`}
              allow="encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          );
        })}

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
