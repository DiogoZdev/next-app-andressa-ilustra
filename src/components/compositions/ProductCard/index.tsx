import { Product } from "@/interfaces/product.interface";
import s from "./style.module.scss";
import Image from "next/image";
import { Button } from "../../basics/Button";
import { ArrowSquareOut } from "@phosphor-icons/react";

export const ProductCard = ({ collection, imageUrl, title, url }: Product) => {  return (
    <article className={s.card}>
      <div className={s.imageWrapper}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1200px) 30vw, (min-width: 700px) 45vw, 90vw"
          className={s.productImage}
        />
      </div>

      <div className={s.info}>
        <span className={s.collection}>{collection}</span>
        <h3 className={s.title}>{title}</h3>
      </div>

      <Button
        icon={<ArrowSquareOut size={20} />}
        variant="primary"
        text="Comprar"
        ariaLabel={`Comprar ${title}`}
        onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      />
    </article>
  );
};
