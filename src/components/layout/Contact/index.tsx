import { EnvelopeOpen, MapPin, Phone } from "@phosphor-icons/react";
import s from "./style.module.scss";
import { Container } from "@/layouts/Container";

export const Contact = () => {
  return (
    <Container>
      <>
        <div className={s.contact}>
          <div>
            <div className={s.chat}>
              Vamos fazer um projeto juntos! Entre em contato{" "}
            </div>
            <div className={s.andressaIcon}>
              <img src="/about/andressa.jpg" alt="andressa" />
            </div>
          </div>
          <ul className={s.infoList}>
            <li>
              <a href="mailto:araujoandressa2018@gmail.com">
                <EnvelopeOpen size={22} className={s.icon} />
                araujoandressa2018@gmail.com
              </a>
            </li>
            <li>
              <a target="_blank" href="https://wa.me/5543984827696">
                <Phone size={22} className={s.icon} />
                +55 43 98482-7696
              </a>
            </li>
            <li>
              <MapPin size={22} className={s.icon} />
              Londrina, PR
            </li>
          </ul>
        </div>
      </>
    </Container>
  );
};
