import Image from "next/image";
import s from "./styles.module.scss";

export const Showreel = () => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.showreel}>
          <Image src={"/img/showreel.jpg"} fill alt={"sdkuf"} />
        </div>
      </div>
    </section>
  );
};
