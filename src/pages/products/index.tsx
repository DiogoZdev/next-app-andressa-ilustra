import style from "./style.module.scss";
import { useEffect, useState } from "react";
import { Container } from "@/layouts/Container";
import { Product, ProductsList } from "@/interfaces/product.interface";
import { ProductCard } from "@/components/compositions/ProductCard";
import { CardInfo } from "@/components/basics/CardInfo";

export default function Products() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const { productsList } = await fetch(
      "https://raw.githubusercontent.com/andressadesign/files/main/products.json"
    ).then((res) => res.json() as Promise<ProductsList>);

    setProducts(productsList);
  }

  return (
    <Container>
      <>  
        <h1 className={style.h1}>Produtos</h1>
        <CardInfo
          label="Aviso sobre a loja"
          text="
          Ao clicar em comprar, você será redirecionado para a loja parceira onde poderá adquirir o ítem escolhido./
          Fiz as artes com carinho. Conheço e recomendo os produtos pela ótima qualidade./
          Espero que você goste!
          "
        ></CardInfo>
        <div className={style.productsArea}>
          {products &&
            products.map((p, index) => <ProductCard key={index} {...p} />)}
        </div>
      </>
    </Container>
  );
}
