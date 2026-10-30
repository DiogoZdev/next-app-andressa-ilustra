import { Container } from "@/layouts/Container";
import s from "./style.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { List, X } from "@phosphor-icons/react";

interface link {
  label: string;
  url: string;
}

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useRouter();

  const left_links: link[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Sobre",
      url: "/about",
    },
  ];

  const right_links: link[] = [
    // {
    //   label: "Loja",
    //   url: "/products",
    // }
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" || pathname === "/home" : pathname === url;

  return (
    <nav className={`${s.nav} ${isScrolled ? s.scrolled : ""}`}>
      <button
        type="button"
        className={s.menu_icon}
        onClick={() => setIsMenuOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        <List size={22} />
      </button>

      <Container>
        <div className={s.center}>
          <div className={s.links_box}>
            {left_links.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={isActive(link.url) ? s.active : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/" className={s.name_center} aria-label="Andressa Araujo — início">
            <Image
              src="/horizontal-name.svg"
              alt="Andressa Araujo"
              width={180}
              height={32}
              priority
              className={s.name}
            />
          </Link>

          <div className={s.links_box}>
            {right_links.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={isActive(link.url) ? s.active : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className={s.mobile_menu} id="mobile-menu">
          <button
            type="button"
            className={s.close}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={25} />
          </button>

          {[...left_links, ...right_links].map((link) => (
            <Link
              key={link.label}
              href={link.url}
              onClick={() => setIsMenuOpen(false)}
              className={isActive(link.url) ? s.active : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
