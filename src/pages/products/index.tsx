import style from "./style.module.scss";
import { useEffect, useState } from "react";
import { Container } from "@/layouts/Container";
import { Product, ProductsList } from "@/interfaces/product.interface";
import { ProductCard } from "@/components/compositions/ProductCard";

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
        <div className={style.productsArea}>
          {products &&
            products.map((p, index) => <ProductCard key={index} {...p} />)}
        </div>
      </>
    </Container>
  );
}
