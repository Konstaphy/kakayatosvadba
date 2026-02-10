import { type FC, type ReactElement, useState } from "react";
import styles from "./coming-form-section.module.css";
import { useIntersectionObserver } from "../../utils/use-intersection-observer.tsx";
import axios from "axios";

export const ComingFormSection: FC = (): ReactElement => {
  const { ref, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Поскольку drinks — это массив чекбоксов, FormData.entries() возьмет только последний или первый.
    // Нужно собрать все выбранные напитки вручную.
    const drinks = formData.getAll("drinks");
    const fullData: any = { ...data, drinks };
    if (!fullData.transfer || !fullData.fio || !fullData.attendance) {
      setError("Пожалуйста, заполните все поля");
      return;
    }
    const message = `
        Новая анкета:
        ФИО: ${fullData.fio}
        Присутствие: ${fullData.attendance}
        Напитки: ${fullData.drinks.join(", ") || "не выбрано"}
        Трансфер: ${fullData.transfer}
    `.trim();

    axios
      .post("https://kakayatosvadba-bot.vercel.app/api/send-message", {
        message: message,
      })
      .then((response) => {
        console.log("Данные анкеты успешно отправлены:", response.data);
        setSubmitted(true);
      })
      .catch((error) => {
        setError("Ошибка при отправке данных анкеты");
        console.error("Ошибка при отправке данных анкеты:", error);
      });

    console.log("Данные анкеты:", { ...data, drinks });
  };

  return (
    <section
      id="coming-form"
      ref={ref}
      className={`${styles.comingForm} ${isIntersecting ? styles.visible : ""}`}
    >
      <p className={"childish"}>Анкета</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fio">
            ФИО
          </label>
          <input
            type="text"
            id="fio"
            name="fio"
            placeholder="Введите ваше имя"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>
            Сможете ли присутствовать на нашем торжестве?
          </label>
          <div className={styles.options}>
            <label className={styles.checkboxLabel}>
              <input
                type="radio"
                name="attendance"
                value="Я с удовольствием приду"
                className={styles.radio}
                required
              />
              Я с удовольствием приду
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="radio"
                name="attendance"
                value="К сожалению, не смогу присутствовать"
                className={styles.radio}
                required
              />
              К сожалению, не смогу присутствовать
            </label>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Что предпочитаете из напитков?</label>
          <div className={styles.options}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="drinks"
                value="Белое вино"
                className={styles.checkbox}
              />
              Белое вино
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="drinks"
                value="Шампанское"
                className={styles.checkbox}
              />
              Шампанское
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="drinks"
                value="Водка"
                className={styles.checkbox}
              />
              Водка
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="drinks"
                value="Пиво"
                className={styles.checkbox}
              />
              Пиво
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="drinks"
                value="Не пью алкоголь"
                className={styles.checkbox}
              />
              Не пью алкоголь
            </label>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Нужен ли Вам трансфер?</label>
          <div className={styles.options}>
            <label className={styles.checkboxLabel}>
              <input
                type="radio"
                name="transfer"
                value="Да"
                className={styles.radio}
              />
              Да
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="radio"
                name="transfer"
                value="Нет"
                className={styles.radio}
              />
              Нет
            </label>
          </div>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!submitted ? (
          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        ) : (
          <p>Будем ждать вас!</p>
        )}
      </form>
    </section>
  );
};
