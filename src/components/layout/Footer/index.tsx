import s from "./style.module.scss";
import { Container } from "@/layouts/Container";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/about" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/andressailustra.art" },
  { label: "Behance", href: "https://behance.net/andressaaraujo4" },
  { label: "Facebook", href: "https://facebook.com/amaarteedesign" },
  { label: "Artstation", href: "https://www.artstation.com/andressaraujo" },
];

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerContent}>
          <div className={s.brand}>
            <Link href="/" className={s.logo} aria-label="Andressa Araujo — início">
              <Image
                src="/horizontal-name.svg"
                width={180}
                height={30}
                alt="Andressa Araujo"
              />
            </Link>
            <p className={s.headline}>
              Ilustrações, Design de identidade visual e outras coisas legais
            </p>
          </div>

          <div className={s.links}>
            <nav className={s.linkGroup} aria-label="Navegação do rodapé">
              <h3>Navegue</h3>
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className={s.linkGroup} aria-label="Redes sociais">
              <h3>Mídias</h3>
              <ul>
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>

      <div className={s.copyright}>
        &copy; {new Date().getFullYear()} Andressa Araujo. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};
