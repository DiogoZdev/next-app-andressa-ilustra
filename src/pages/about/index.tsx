import style from "./style.module.scss";
import { Participations } from "@/components/layout/Participations";
import { Container } from "@/layouts/Container";
import { motion } from "framer-motion"

export default function About() {
  return (
    <Container>
      <>
        <div className={style.text_wrapper}>
          <div className={style.text_area}>
            <h1 className={style.h1}>Sobre</h1>
            <p className={style.p}>
              Olá,
            </p>
            <p className={style.p}>
              me chamo Andressa e sou apaixonada por arte e design.
            </p>
            <p className={style.p}>
              Meu trabalho consiste em ajudar a agregar valor, aumentar a visibilidade de marcas,
              pessoas e projetos por meio da ilustração, do design e criatividade
            </p>
            <p className={style.p}>
            Vem, me conte o que você precisa
            </p>
            <hr style={{ marginTop: "4rem" }} />
            <h1 className={style.h1}>Participações</h1>
            <Participations></Participations>

          </div>
          <div className={style.image}>
            <img
              src="/about/vertical-andressa.png"
            />
          </div>
        </div>
      </>
    </Container>
  );
};
