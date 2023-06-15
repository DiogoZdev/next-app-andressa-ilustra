import { ReactNode } from "react";
import style from "./style.module.scss";

interface ButtonProps {
	variant: 'primary' | 'secondary' | 'danger';
  text?: string;
  icon?: ReactNode;
  onClick: () => void;
}

export const Button = ({ text, icon: Icon, onClick, variant }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={style[variant]} >
     {Icon && <span>{Icon}</span>}
      <span>{text}</span>
    </button>
  );
};
