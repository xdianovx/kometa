import { StageItem, Title } from "@/components/ui";
import s from "./styles.module.scss";

export const Stages = ({}) => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.top}>
          <Title tag="h2" uppercase>
            ЭТАПЫ <br /> РАБОТЫ
          </Title>

          <p className={s.description}>
            Все процессы налаженны и строго регламентированы, что позвонять не
            беспокоить вас по мелочам, а нам не срывать сроки.
          </p>
        </div>

        <div className={s.wrap}>
          <StageItem />
          <StageItem />
          <StageItem />
          <StageItem />
          <StageItem />
        </div>
      </div>
    </section>
  );
};
