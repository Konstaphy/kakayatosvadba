import type { FC, ReactElement } from "react";
import { useIntersectionObserver } from "../../utils/use-intersection-observer.tsx";
import styles from "./place-section.module.css";

export const PlaceSection: FC = (): ReactElement => {
  const { ref, isIntersecting } = useIntersectionObserver();
  return (
    <section
      id="Place"
      ref={ref}
      className={`${styles.place} ${isIntersecting ? styles.visible : ""}`}
    >
      <p className={"childish"}>Место проведения</p>
      Гостевой дом, СНТ Политехник, 138, Пермь
      <br />
      <br />
      Место сбора: Мира 15 - ЗАГС Индустриального района
    </section>
  );
};
