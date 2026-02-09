import type { FC, ReactElement } from "react";
import { PlanItem } from "./plan-item/plan-item.tsx";

export const PlanSection: FC = (): ReactElement => {
  return (
    <section id="plan">
      <p className={"childish"}>План дня</p>
      <PlanItem
        text={["9:10", <br />, "Сбор гостей"]}
        icon={"/plan/map.png"}
        description={[
          "Собираясь на торжество, возьмите с собой улыбки и хорошее настроение",
        ]}
      />
      <PlanItem
        text={["9:30", <br />, "Церемония"]}
        icon={"/plan/rings.png"}
        description={["Адрес: Мира 15 - ЗАГС Индустриального района"]}
      />
      <PlanItem
        text={["10:00", <br />, "Фотосессия"]}
        icon={"/plan/cake.png"}
        description={[]}
      />
      <PlanItem
        text={["17:00", <br />, "Банкет"]}
        icon={"/plan/cups.png"}
        description={["Время вкусной еды\n" + "и развлечений"]}
      />

      <PlanItem
        text={["22:00", <br />, "Дискотека"]}
        icon={"/plan/planet.png"}
        description={["Приятная музыка и танцы"]}
      />
      <PlanItem
        text={["23:00", <br />, "Happy end"]}
        icon={"/plan/moon.png"}
        description={["И на этом не заканчиваем, продолжение следует!"]}
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
