import { ButtonHTMLAttributes } from "react";
import styles from "./index.module.css";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
  return <button className={styles.button} {...rest}>{children}</button>;
}
