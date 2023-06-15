import { ProductCard } from "@/components/basics/ProductCard";
import { ProductsList, Product } from "@/interfaces/product.interface";
import { Container } from "@/layouts/Container";
import { useEffect, useState } from "react";

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
    <>
      <style jsx>
        {`
          h1 {
            font-size: 3rem;
            width: fit-content;
            margin: 2rem auto;
          }

          .products-area {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 2rem 0;
          }
        `}
      </style>
      <Container>
        <>
          <h1>Produtos</h1>
          <div className="products-area">
            {products &&
              products.map((p, index) => <ProductCard key={index} {...p} />)}
          </div>
        </>
      </Container>
    </>
  );
}
