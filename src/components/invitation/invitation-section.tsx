import type { FC, ReactElement } from "react";
import { useIntersectionObserver } from "../../utils/use-intersection-observer.tsx";
import styles from "./invitation-section.module.css";

export const InvitationSection: FC = (): ReactElement => {
  const { ref, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
  });
  return (
    <section
      id="Invitation"
      ref={ref}
      className={`${styles.invitation} ${isIntersecting ? styles.visible : ""}`}
    >
      <p className={"childish"}>Дорогие родные и друзья!</p>
      Узнаете этих детишек?
      <br />
      <br />
      Да-да, это мы!
      <br />
      Время пролетело очень быстро,
      <br />
      представляете?
      <br />
      <br />И вот уже совсем скоро состоится самое важное событие в нашей жизни
      — мы станем одной семьей!
      <img
        src={"/plan/wtfthursday.png"}
        alt={"123"}
        style={{ margin: "30px 0px", width: "100%" }}
      />
    </section>
  );
};
