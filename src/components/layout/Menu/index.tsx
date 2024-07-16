import { Container } from "@/layouts/Container";
import s from "./style.module.scss";
import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

interface link {
  label: string;
  url: string;
}

export const Menu = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const left_links: link[] = [
    {
      label: "Home",
      url: "/"
    },
    {
      label: "Sobre",
      url: "/about"
    },
  ]


  const right_links: link[] = [
    // {
    //   label: "Loja",
    //   url: "/products"
    // }
  ]

  return (
    <nav className={s.nav}>

      <div className={s.menu_icon}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ><List size={22} /></div>

      <Container>
        <div className={s.center}>
          <div className={s.links_box}>
            {
              left_links.map((link) => (
                <Link key={link.label} href={link.url}>{link.label}</Link>
              ))
            }
          </div>
          <div className={s.name_center}>
            <img src="/horizontal-name.svg" alt="" className={s.name} />
          </div>
          <div className={s.links_box}>
            {
              right_links.map((link) => (
                <Link key={link.label} href={link.url}>{link.label}</Link>
              ))
            }
          </div>
        </div>
      </Container>
      {isMenuOpen && <div className={s.mobile_menu}>
        <X size={25} className={s.close} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        {
          left_links.map((link) => (
            <Link key={link.label} href={link.url} onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
          ))
        }
        {
          right_links.map((link) => (
            <Link key={link.label} href={link.url} onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
          ))
        }
      </div>}
    </nav>
  );
};
