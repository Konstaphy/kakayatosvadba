import type { FC, ReactElement } from "react";
import styles from "./contacts-section.module.css";
import { useIntersectionObserver } from "../../utils/use-intersection-observer.tsx";

export const ORGANIZER_PHONE = "+79048477115";

export const ContactSection: FC = (): ReactElement => {
  const { ref, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
  });

  const tgLink = `https://t.me/uullyaaaaaa`;

  return (
    <section
      id="contacts"
      ref={ref}
      className={`${styles.contacts} ${isIntersecting ? styles.visible : ""}`}
    >
      <p className={"childish"}>Контакты</p>

      <div className={styles.text}>
        Если у вас возникнут какие-то вопросы в день мероприятия, вы можете
        обратиться к нашему организатору
      </div>

      <div className={styles.organizerInfo}>
        Невеста:
        <span className={styles.phone}>{ORGANIZER_PHONE}</span>
      </div>

      <a
        href={tgLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.tgButton}
      >
        Написать в Telegram
      </a>
    </section>
  );
};
