import type { FC, ReactElement } from "react";
import styles from "./wishes-section.module.css";
import { useIntersectionObserver } from "../../utils/use-intersection-observer.tsx";

export const WishesSection: FC = (): ReactElement => {
  const { ref, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
  });

  return (
    <section
      id="wishes"
      ref={ref}
      className={`${styles.wishes} ${isIntersecting ? styles.visible : ""}`}
    >
      <div className={styles.backgroundLayer} />

      <div className={styles.contentLayer}>
        <div className={styles.ramka}>
          <img src="/ramka/ramka.png" alt="Decorative frame" />
        </div>

        <p className={`childish ${styles.title}`}>Пожелания</p>

        <div className={styles.textBlock}>
          <p className={styles.paragraph}>
            Наш праздник для взрослых. По возможности, оставьте детей под
            присмотром и погрузитесь в мир романтики вместе с нами!
          </p>

          <img
            src="/plan/3hearts.png"
            alt="Hearts icon"
            className={styles.heartIcon}
          />

          <p className={styles.paragraph}>
            Свои тёплые слова и пожелания приносите в сердцах, а подарки - в
            конверте.
          </p>

          <img
            src="/plan/3hearts.png"
            alt="Hearts icon"
            className={styles.heartIcon}
          />

          <p className={styles.paragraph}>
            Просим Вас не дарить нам цветы - сразу после свадьбы мы улетаем в
            свадебное путешествие и не успеем насладиться их красотой.
          </p>
        </div>
      </div>
    </section>
  );
};
