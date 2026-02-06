import type { FC, ReactNode } from "react";
import styles from "./icon-circle.module.css";

type TIconCircleProps = {
  children: ReactNode;
};

export const IconCircle: FC<TIconCircleProps> = ({ children }) => {
  return <div className={styles.iconCircle}>{children}</div>;
};
