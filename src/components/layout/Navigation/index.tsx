import Link from "next/link";
import Image from "next/image";
import { Container } from "@/layouts/Container";
import { navigation } from "@/config/navigation";
import { SettingsMenu } from "../Settings";

export const Nav = () => {
  function setActivePage(page?: string) {
    navigation.forEach((item) => {
      item.active = false;
      if (item.title === page) {
        item.active = true;
      }
    });
  }

  return (
    <>
      <style jsx>{`
        .nav-content {
          display: flex;
        }

        .sub-container {
          display: flex;
          justify-content: space-between;
        }

        ul {
          display: flex;
          gap: 0;
          height: 100%;
        }

        .home {
          display: grid;
          padding: 10px 1rem;
          height: 100%;
          place-content: center;
        }

        .li-text {
          display: block;
          padding: 1rem 2rem;
        }

        li:hover {
          background-color: var(--green-100);
        }

        .active {
          text-decoration: underline;
          text-underline-offset: 0.5rem;
        }
      `}</style>
      <nav>
        <Container>
          <div className="sub-container">
            <div className="nav-content">
              <ul>
                <Link href="/" onClick={() => setActivePage()}>
                  <li className="home">
                    <Image
                      src="/logo-feather.svg"
                      alt="logo"
                      width={22}
                      height={30}
                      style={{
                        filter: "var(--svg-theme-color)",
                      }}
                    />
                  </li>
                </Link>
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    onClick={() => setActivePage(item.title)}
                  >
                    <li className={`li-text ${item.active ? 'active' : ''}`}>{item.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <SettingsMenu />
          </div>
        </Container>
      </nav>
    </>
  );
};
