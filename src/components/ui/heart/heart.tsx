import type { FC } from "react";
import styles from "./heart.module.css";

interface HeartProps {
  color: string;
  size?: number;
}

export const Heart: FC<HeartProps> = ({ color, size = 40 }) => {
  return (
    <div
      className={styles.heart}
      style={
        {
          "--heart-color": color,
          width: size,
          height: size,
        } as React.CSSProperties
      }
    >
      <div className={styles.inner} />
    </div>
  );
};
