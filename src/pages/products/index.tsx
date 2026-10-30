import s from "./style.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Container } from "@/layouts/Container";
import { Product, ProductsList } from "@/interfaces/product.interface";
import { ProductCard } from "@/components/compositions/ProductCard";
import { CardInfo } from "@/components/basics/CardInfo";

const PRODUCTS_URL =
  "https://raw.githubusercontent.com/andressadesign/files/main/products.json";

type Status = "loading" | "ready" | "error";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        const { productsList } = await fetch(PRODUCTS_URL).then(
          (res) => res.json() as Promise<ProductsList>
        );

        if (!cancelled) {
          setProducts(productsList);
          setStatus("ready");
        }
      } catch (error) {
        console.error("Não foi possível carregar os produtos.", error);
        if (!cancelled) setStatus("error");
      }
    }

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Container>
      <>
        <Head>
          <title>Produtos — Andressa Araujo</title>
        </Head>
        <header className={s.header}>
          <span className={s.eyebrow}>Loja parceira</span>
          <h1 className={s.title}>Produtos</h1>
          <p className={s.subtitle}>
            Peças ilustradas com carinho para acompanhar o seu dia a dia.
          </p>
        </header>

        <CardInfo
          label="Aviso sobre a loja"
          text="Ao clicar em comprar, você será redirecionado para a loja parceira onde poderá adquirir o ítem escolhido./Fiz as artes com carinho. Conheço e recomendo os produtos pela ótima qualidade./Espero que você goste!"
        />

        {status === "loading" && (
          <div className={s.productsArea} aria-busy="true" aria-label="Carregando produtos">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className={s.skeleton} key={index} />
            ))}
          </div>
        )}

        {status === "error" && (
          <p className={s.error}>
            Não foi possível carregar os produtos agora. Atualize a página e
            tente novamente.
          </p>
        )}

        {status === "ready" && (
          <div className={s.productsArea}>
            {products.map((product) => (
              <ProductCard key={product.url} {...product} />
            ))}
          </div>
        )}
      </>
    </Container>
  );
}
