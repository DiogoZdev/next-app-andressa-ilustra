import { Product } from "@/interfaces/product.interface";
import style from "./style.module.scss";
import Image from "next/image";
import { Button } from "../Button";
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
      <Image
        width={350}
        height={320}
        src={imageUrl}
        alt={title}
        style={{ 
			objectFit: "cover",
		  	objectPosition: "center",
			alignSelf: "center",
		}}
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
