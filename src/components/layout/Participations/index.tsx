import s from "./style.module.scss";
import Image from "next/image";

const PARTICIPATIONS = [
  {
    name: "Dobra",
    href: "https://querodobra.com.br/colab/ama/",
    image: "/about/dobra.jpeg",
    round: true,
  },
  {
    name: "Adobe",
    href: "https://stock.adobe.com/br/contributor/209235905/Andressa%20Araujo",
    image: "/about/adobe-stock.jpeg",
    round: false,
  },
  {
    name: "Gioia",
    href: "https://www.instagram.com/gioia_ateliededoces/",
    image: "/about/gioia.jpeg",
    round: true,
  },
  {
    name: "Nós",
    href: "https://nossoolharsolidario.com.br/",
    image: "/about/nos.jpeg",
    round: true,
  },
];

export const Participations = () => {
  return (
    <ul className={s.list}>
      {PARTICIPATIONS.map((item) => (
        <li className={s.item} key={item.name}>
          <a href={item.href} target="_blank" rel="noreferrer">
            <Image
              src={item.image}
              alt={item.name}
              width={96}
              height={96}
              className={item.round ? s.round : undefined}
            />
            <span>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
