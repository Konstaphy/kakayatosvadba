import type { FC, ReactElement } from "react";
import styles from "./hero-section.module.css";
import { useScatteredImagesSimple } from "../../utils/use-scattered-images.tsx";

const URLS = [
  "/hearts/heart1.webp",
  "/hearts/heart2.webp",
  "/hearts/heart4.webp",
];

export const HeroSection: FC = (): ReactElement => {
  const { containerRef, scatteredImages } = useScatteredImagesSimple({
    imageUrls: URLS,
    itemsPerImage: 6,
    imgSize: 70,
  });
  return (
    <>
      <section id="hero" className={styles.hero} ref={containerRef}>
        {scatteredImages}
        <p className={"childish"} style={{ zIndex: 10, marginBottom: "0" }}>
          Wedding
        </p>
        <p className={styles.heroDate}>15 | 05 | 26</p>
        <img className={styles.heroImage} alt={"zhenih"} src={"/zhenih.png"} />
        <div className={styles.heroCover}>
          <img alt={"1"} src={"/ramka-2.png"} />
        </div>
      </section>
    </>
  );
};
