import type { FC, ReactElement } from "react";
import styles from "./dress-code-section.module.css";
import { useIntersectionObserver } from "../../utils/use-intersection-observer.tsx";
import { Heart } from "../ui/heart/heart.tsx";

const HEART_COLORS = [
  "#6D4C41", // Темно-коричневый
  "#8D6E63", // Коричневый
  "#A1887F", // Светло-коричневый
  "#BCAAA4", // Бежевый
  "#d3c4ba", // Светло-бежевый
  "#e3d6cd", // Молочный
];

export const DressCodeSection: FC = (): ReactElement => {
  const { ref, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
  });

  return (
    <section
      id="dress-code"
      ref={ref}
      className={`${styles.dressCode} ${isIntersecting ? styles.visible : ""}`}
    >
      <p className={`childish ${styles.title}`}>Дресс-код</p>

      <div className={styles.text}>
        Мы очень ждем и с удовольствием готовимся к нашему незабываемому дню!
        <br />
        <br />
        Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами в
        классическом стиле.
      </div>

      <div className={styles.text}>Бежевые и пастельные оттенки</div>

      <div className={styles.heartsContainer}>
        {[...HEART_COLORS].map((color, index) => (
          <Heart key={index} color={color} size={60} />
        ))}
      </div>
      <div className={styles.text}>
        Помните, что в белом должна быть только невеста :)
      </div>
    </section>
  );
};
