import { EnvelopeOpen, MapPin, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import s from "./style.module.scss";
import { Container } from "@/layouts/Container";

export const Contact = () => {
  return (
    <Container>
      <section className={s.contactWrapper} id="contact">
        <div className={s.contact}>
          <div className={s.leftCol}>
            <h2 className={s.tagline}>
              Vamos fazer um projeto <em>juntos</em>?
            </h2>

            <div className={s.chatBubble}>
              <div className={s.avatar}>
                <Image
                  src="/about/andressa.jpg"
                  alt="Andressa Araujo"
                  width={200}
                  height={200}
                />
              </div>
              <p className={s.bubble}>
                Me conte o que você precisa.
              </p>
            </div>
          </div>

          <ul className={s.infoList}>
            <li>
              <a href="mailto:contato@andressailustra.art">
                <EnvelopeOpen size={22} className={s.icon} aria-hidden />
                contato@andressailustra.art
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/5543984827696"
              >
                <Phone size={22} className={s.icon} aria-hidden />
                +55 43 98482-7696
              </a>
            </li>
            <li>
              <MapPin size={22} className={s.icon} aria-hidden />
              Londrina, PR
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
};
