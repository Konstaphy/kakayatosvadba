import { type FC, type ReactElement, useEffect, useState } from "react";
import styles from "./footer-section.module.css";
import { useScatteredImagesSimple } from "../../utils/use-scattered-images.tsx";

const HEART_URLS = [
  "/hearts/heart1.webp",
  "/hearts/heart2.webp",
  "/hearts/heart3.webp",
  "/hearts/heart4.webp",
];

const TARGET_DATE = new Date("2026-05-15T00:00:00");

export const FooterSection: FC = (): ReactElement => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { containerRef, scatteredImages } = useScatteredImagesSimple({
    imageUrls: HEART_URLS,
    itemsPerImage: 4,
    imgSize: 50,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="footer" className={styles.footer} ref={containerRef}>
      {scatteredImages}
      <p className={"childish"} style={{ zIndex: 10, marginBottom: "30px" }}>
        Ждем вас через
      </p>
      <div className={styles.timer}>
        <div className={styles.timerItem}>
          <span className={styles.timerValue}>{timeLeft.days}</span>
          <span className={styles.timerLabel}>дней</span>
        </div>
        <div className={styles.timerItem}>
          <span className={styles.timerValue}>{timeLeft.hours}</span>
          <span className={styles.timerLabel}>часов</span>
        </div>
        <div className={styles.timerItem}>
          <span className={styles.timerValue}>{timeLeft.minutes}</span>
          <span className={styles.timerLabel}>минут</span>
        </div>
        <div className={styles.timerItem}>
          <span className={styles.timerValue}>{timeLeft.seconds}</span>
          <span className={styles.timerLabel}>секунд</span>
        </div>
      </div>
      <img
        src="/lastphoto.png"
        alt="Wedding final"
        className={styles.lastPhoto}
        style={{ marginBottom: "-10px" }}
      />
    </section>
  );
};
