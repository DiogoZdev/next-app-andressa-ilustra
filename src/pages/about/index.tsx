import style from "./style.module.scss";
import { Participations } from "@/components/layout/Participations";
import { Container } from "@/layouts/Container";
import { motion } from "framer-motion"

export default function About() {
  return (
    <Container>
      <>
        <h1 className={style.h1}>Sobre</h1>
        <div className={style.andressaContainer}>
          <motion.img
            src="/about/andressa.jpg"
            initial={{ opacity: 0, x: -200, height: 250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={style.andressa}
          />
        </div>
        <p className={style.p}>
          Olá! Sou a Andressa, uma apaixonada por comunicação visual, e estou
          animada para compartilhar minha paixão e talento com você. Desde 2012,
          tenho explorado o mundo da arte e do design, e cada dia descubro novas
          maneiras de agregar valor e aumentar a visibilidade através de
          projetos visuais incríveis.
        </p>
        <p className={style.p}>
          Meu objetivo é criar uma conexão genuína entre você e seu público,
          transmitindo sua mensagem de forma única e impactante. Seja na criação
          de uma identidade visual cativante, na produção de ilustrações
          encantadoras, na concepção de mascotes e personagens cheios de
          personalidade ou na elaboração de composições gráficas para
          divulgação, estou aqui para transformar suas ideias em realidade.
        </p>
        <p className={style.p}>
          E novidades virão! Logo estarei adicionando motion design aos meus
          projetos. Estou sempre em busca de aprimoramento e novas maneiras de
          trazer vida aos projetos, tornando-os ainda mais dinâmicos e
          envolventes.
        </p>
        <p className={style.p}>
          Estou ansiosa para embarcar nessa jornada criativa com você. Vamos
          criar algo maravilhoso juntos! Sinta-se à vontade para explorar meu
          portfólio e conhecer um pouco mais sobre meu trabalho. Se tiver alguma
          dúvida ou quiser discutir um projeto, entre em contato.
        </p>
        <p className={style.p}>
          Estou aqui para ajudar e tornar suas ideias visuais uma realidade.
        </p>
        <h1 className={style.h1}>Participações</h1>
        <Participations></Participations>
      </>
    </Container>
  );
};
