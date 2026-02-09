import React, { useState } from "react";
import confetti from "canvas-confetti";
import styles from "./envelope-overlay.module.css";

export const EnvelopeOverlay: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleOpen = (e: React.MouseEvent) => {
    // Если клик был непосредственно по оверлею (фону), а не по конверту
    if (e.target === e.currentTarget) {
      setIsVisible(false);
      return;
    }

    if (isOpened) return;

    setIsOpened(true);

    // Запуск конфетти
    const end = Date.now() + 2 * 1000;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Скрыть оверлей после завершения анимации
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.overlay} ${isOpened ? styles.overlayHidden : ""}`}
      onClick={handleOpen}
    >
      <div
        className={`${styles.envelopeWrapper} ${isOpened ? styles.opened : ""}`}
      >
        <div className={styles.flap}></div>
        <div className={styles.note}>вы приглашены на свадьбу</div>
        <div className={styles.envelopeBody}></div>
      </div>
    </div>
  );
};
