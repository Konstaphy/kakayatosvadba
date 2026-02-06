import type { FC, ReactElement, ReactNode } from "react";
import { IconCircle } from "../icon-circle/icon-circle.tsx";
import { PlanDivider } from "../divider/divider.tsx";
import { PlanTitle } from "../plan-title/plan-title.tsx";
import { PlanDescription } from "../plan-description/plan-description.tsx";
import styles from "./plan-item.module.css";
import { useIntersectionObserver } from "../../../utils/use-intersection-observer.tsx";

type TPlanItemProps = {
  icon: string;
  text: ReactNode[];
  description: ReactNode[];
  noDivider?: boolean;
};

export const PlanItem: FC<TPlanItemProps> = ({
  icon,
  text,
  description,
  noDivider = false,
}): ReactElement => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();
  return (
    <div
      className={`${styles.planItem} ${isIntersecting ? styles.visible : ""}`}
      ref={ref}
    >
      <div className={styles.planItemIcons}>
        <IconCircle>
          <img src={icon} alt={icon} className={styles.iconImage} />
        </IconCircle>
        {!noDivider && <PlanDivider />}
      </div>
      <div className={styles.planItemTitle}>
        <PlanTitle text={text} />
        <div className={styles.planItemDescription}>
          <PlanDescription text={description} />
        </div>
      </div>
    </div>
  );
};
