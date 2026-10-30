import { ReactNode } from "react";
import s from "./Container.module.scss";

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`${s.container} ${className}`.trim()}>{children}</div>;
};
