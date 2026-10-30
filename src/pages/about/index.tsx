import s from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Participations } from "@/components/layout/Participations";
import { Container } from "@/layouts/Container";

export default function About() {
  return (
    <Container>
      <>
        <Head>
          <title>Sobre — Andressa Araujo</title>
        </Head>
        <section className={s.about}>
          <div className={s.textColumn}>
            <span className={s.eyebrow}>Ilustração &amp; design</span>
            <h1 className={s.title}>Sobre</h1>

            <p className={s.lead}>Olá,</p>
            <p className={s.lead}>
              me chamo Andressa e sou apaixonada por arte e design.
            </p>
            <p>
              Meu trabalho consiste em ajudar a agregar valor e aumentar a
              visibilidade de marcas, pessoas e projetos por meio da ilustração,
              do design e da criatividade.
            </p>
            <p>Vem, me conte o que você precisa.</p>

            <Link href="#contact" className={s.cta}>
              Vamos conversar
            </Link>
          </div>

          <div className={s.imageWrapper}>
            <Image
              src="/about/vertical-andressa.png"
              alt="Retrato de Andressa Araujo"
              fill
              priority
              sizes="(min-width: 900px) 40vw, 100vw"
              className={s.image}
            />
          </div>
        </section>

        <section className={s.participations}>
          <h2 className={s.sectionTitle}>Participações</h2>
          <Participations />
        </section>
      </>
    </Container>
  );
}
