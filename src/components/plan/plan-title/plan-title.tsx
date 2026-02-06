import type { ReactNode } from "react";
import styles from "./plan-title.module.css";

export const PlanTitle = ({ text }: { text: ReactNode[] }) => {
  return <p className={styles.title}>{text}</p>;
};
