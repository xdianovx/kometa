import s from "./styles.module.scss";

export const StageItem = () => {
  return (
    <div className={s.item}>
      <div className={s.wrap}>
        <div className={s.num}>01</div>

        <div className={s.inner}>
          <div className={s.title}>
            <h3>Первая встреча</h3>
            <p>
              Вам не придется готовить сложные ТЗ и заполнять километровые
              брифы. Мы умеем слышать и легко вникаем даже в самые сложные
              бизнес-процессы.
            </p>
          </div>

          <div className={s.right}>asd</div>
        </div>
      </div>

      <div className={s.hr}></div>
    </div>
  );
};
