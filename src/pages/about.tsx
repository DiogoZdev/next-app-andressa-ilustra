import { motion } from "framer-motion";
import { Participations } from "@/components/layout/Participations";
import { Container } from "@/layouts/Container";

export default function About() {
  return (
    <>
      <style jsx>{`
        .andressa-container {
          margin: 0 auto;
          height: 250px;
          aspect-ratio: 1;
          position: relative;
          margin-bottom: 3rem;
          border-radius: 2%;
        }

        .andressa {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          border-radius: 2%;
        }

        img {
          margin: 2rem auto;
          display: block;
        }

        h1 {
          font-size: 3rem;
          width: fit-content;
          margin: 2rem auto;
        }

        h1:not(:first-child) {
          margin-top: 5 rem;
        }

        p {
          max-width: 70ch;
          line-height: 1.8;
          margin: 0 auto 2ch;
          text-indent: 2ch;
        }
      `}</style>
      <Container>
        <>
          <h1>Sobre</h1>
          <div className="andressa-container">
            <motion.img
              src="/about/andressa.jpg"
              initial={{ opacity: 0, x: -200, height: 250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="andressa"
            />
          </div>
          <p>
            Olá! Sou a Andressa, uma apaixonada por comunicação visual, e estou
            animada para compartilhar minha paixão e talento com você. Desde
            2012, tenho explorado o mundo da arte e do design, e cada dia
            descubro novas maneiras de agregar valor e aumentar a visibilidade
            através de projetos visuais incríveis.
          </p>
          <p>
            Meu objetivo é criar uma conexão genuína entre você e seu público,
            transmitindo sua mensagem de forma única e impactante. Seja na
            criação de uma identidade visual cativante, na produção de
            ilustrações encantadoras, na concepção de mascotes e personagens
            cheios de personalidade ou na elaboração de composições gráficas
            para divulgação, estou aqui para transformar suas ideias em
            realidade.
          </p>
          <p>
            E novidades virão! Logo estarei adicionando motion design aos meus
            projetos. Estou sempre em busca de aprimoramento e novas maneiras de
            trazer vida aos projetos, tornando-os ainda mais dinâmicos e
            envolventes.
          </p>
          <p>
            Estou ansiosa para embarcar nessa jornada criativa com você. Vamos
            criar algo maravilhoso juntos! Sinta-se à vontade para explorar meu
            portfólio e conhecer um pouco mais sobre meu trabalho. Se tiver
            alguma dúvida ou quiser discutir um projeto, entre em contato.
          </p>
          <p>
            Estou aqui para ajudar e tornar suas ideias visuais uma realidade.
          </p>
          <h1>Participações</h1>
          <Participations></Participations>
        </>
      </Container>
    </>
  );
}
