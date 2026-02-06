import type { ReactNode } from "react";
import styles from "./plan-description.module.css";

export const PlanDescription = ({ text }: { text: ReactNode[] }) => {
  return <p className={styles.description}>{text}</p>;
};
