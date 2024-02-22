import { Title } from "@/components/ui";
import s from "./styles.module.scss";

export const Hero = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.image}></div>
          <div>
            <Title tag="h1">
              мы <br /> создаем <br />
              <span>сайты</span> <br /> и <span>приложения</span>
            </Title>
          </div>
        </div>

        <div className={s.hr}></div>
      </div>
    </section>
  );
};
