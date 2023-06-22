import s from "./style.module.scss";
import { Container } from "@/layouts/Container";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerContent}>
          <div>
            <div className={s.logo}>
              <Image src="/logo-horizontal.svg"
                width={180}
                height={30}
                alt=""
                style={{ filter: "invert(100%)" }}
              />
            </div>
            <span className={s.headline}>Ilustrações, Design de identidade visual e outras coisas legais</span>
          </div>
          <div className={s.links}>
            <div>
              <h3>Navegue</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">Sobre</Link></li>
                <li><Link href="/products">Produtos</Link></li>
              </ul>
            </div>
            <div>
              <h3>Mídias</h3>
              <ul>
                <li><Link target="_blank" href="https://instagram.com/andressailustra.art">Instagram</Link></li>
                <li><Link target="_blank" href="https://behance.net/andressaaraujo4">Beance</Link></li>
                <li><Link target="_blank" href="https://facebook.com/amaarteedesign">Facebook</Link></li>
                <li><Link target="_blank" href="https://www.artstation.com/andressaraujo">Artstations</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className={s.copyright}>
        &copy; Copyright {new Date().getFullYear()}
      </div>
    </footer>
  );
};
