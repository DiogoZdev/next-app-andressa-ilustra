import Link from "next/link";
import Image from "next/image";
import { Container } from "@/layouts/Container";

interface NavigationItem {
  title: string;
  href: string;
}

export const Nav = () => {
  const navigation: NavigationItem[] = [
    {
      title: "sobre",
      href: "/about",
    },
    {
      title: "produtos",
      href: "/products",
    },
  ];

  return (
    <>
      <style jsx>{`
        nav {
          padding: 1rem 0;
        }

        ul {
          display: flex;
          gap: 3rem;
        }
      `}</style>
      <nav>
        <Container>
          <ul>
            <Link href="/">
              <li>
                <Image
                  src="/logo-feather.svg"
                  alt="logo"
                  width={22}
                  height={32}
                  style={{
                    filter: 'var(--svg-theme-color)',
                  }}
                />
              </li>
            </Link>
            {navigation.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
};
