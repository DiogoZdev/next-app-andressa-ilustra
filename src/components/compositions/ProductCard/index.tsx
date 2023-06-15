import { Product } from "@/interfaces/product.interface";
import style from "./style.module.scss";
import Image from "next/image";
import { Button } from "../../basics/Button";
import { ArrowSquareOut } from "@phosphor-icons/react";

interface CardProps extends Product {}

export const ProductCard = ({
  collection,
  imageUrl,
  title,
  url,
}: CardProps) => {
  return (
    <div className={style.card}>
      <img
        src={imageUrl}
        alt={title}
        className={style.productImage}
      />
      <h3>{title}</h3>
      <i>{collection}</i>
	  <Button
	  	icon={<ArrowSquareOut size={22}/>}
	  	variant="primary"
		text="Comprar"
		onClick={() => {
			const a = document.createElement('a');
			a.href = url;
			a.target = '_blank';
			a.click();
		}}
	  />
    </div>
  );
};
