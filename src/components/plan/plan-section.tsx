import type { FC, ReactElement } from "react";
import { PlanItem } from "./plan-item/plan-item.tsx";
import { useIntersectionObserver } from "../../utils/use-intersection-observer.tsx";
import styles from "./plan-section.module.css";

export const PlanSection: FC = (): ReactElement => {
  const { ref, isIntersecting } = useIntersectionObserver();
  return (
    <section
      id="plan"
      ref={ref}
      className={`${styles.plan} ${isIntersecting ? styles.visible : ""}`}
    >
      <p className={"childish"}>План дня</p>
      <PlanItem
        text={["16:00", <br />, "Сбор гостей"]}
        icon={"/plan/map.png"}
        description={[
          "Собираясь на торжество, возьмите с собой улыбки и хорошее настроение",
        ]}
      />
      <PlanItem
        text={["16:30", <br />, "Церемония"]}
        icon={"/plan/rings.png"}
        description={["Приготовьте платочки для трогательного момента"]}
      />
      <PlanItem
        text={["17:00", <br />, "Банкет"]}
        icon={"/plan/cups.png"}
        description={["Время вкусной еды\n" + "и развлечений"]}
      />
      <PlanItem
        text={["21:00", <br />, "Торт"]}
        icon={"/plan/cake.png"}
        description={["Сладкая традиция, которую мы не можем пропустить"]}
      />
      <PlanItem
        text={["22:00", <br />, "Дискотека"]}
        icon={"/plan/planet.png"}
        description={["Приятная музыка и танцы"]}
      />
      <PlanItem
        text={["23:00", <br />, "Happy end"]}
        icon={"/plan/moon.png"}
        description={[
          "К сожалению, даже такой волшебный вечер может подойти к концу",
        ]}
      />
      <PlanItem
        text={[]}
        icon={"/plan/2hearts.png"}
        description={[]}
        noDivider
      />
    </section>
  );
};
