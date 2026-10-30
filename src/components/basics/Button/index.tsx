import { ReactNode } from "react";
import style from "./style.module.scss";

interface ButtonProps {
  variant: "primary" | "secondary" | "danger" | "transparent";
  text?: string;
  icon?: ReactNode;
  onClick: () => void;
  ariaLabel?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

export const Button = ({
  text,
  icon: Icon,
  onClick,
  variant,
  ariaLabel,
  disabled,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={style[variant]}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {Icon && <span aria-hidden>{Icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};
