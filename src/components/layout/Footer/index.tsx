import { Container } from "@/layouts/Container";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <style jsx>{`
        footer {
          background: var(--gray-100);
          padding-top: 7rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .logo {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .logo-text {
          color: var(--text-dark);
          font-weight: 700;
        }

        .headline {
          font-size: 0.8rem;
          color: var(--gray-700);
          line-height: 1.8;
          max-width: 36ch;
          display: block;
        }

        h3 {
          font-size: 1rem;
          font-family: "Comfortaa";
          font-weight: 400;
          margin-bottom: 1rem;
        }

        .links {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }

        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: .5rem;
        }

        li {
          font-size: .8rem;
          line-height: 1.5;
          {/* text-align: left */}
          color: var(--gray-700);
        }

        .copyright {
          margin-top: 1rem;
          background: var(--gray-200);
          padding: 1rem;
          font-size: 0.8rem;
          font-weight: bold;
        }
      `}</style>
      <footer>
        <Container>
          <div className="footer-content">
            <div>
              <div className="logo">
                {/* <span className="logo-text">Andressa Araujo</span> */}
                <Image src="/logo-horizontal.svg"
                  width={180}
                  height={30}
                  alt=""
                  style={{ filter: "invert(100%)" }}
                />
              </div>
              <span className="headline">Ilustrações, Design de identidade visual e outras coisas legais</span>
            </div>
            <div className="links">
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
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};
