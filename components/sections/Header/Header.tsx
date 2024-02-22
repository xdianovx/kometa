import { Burger, Button, Logo } from "@/components/ui";
import s from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrap}>
          <Logo />
          <div className={s.left}>
            <Burger />
            <Button href="/brief">Обсудить проект</Button>
          </div>
        </div>

        <div className={s.hr}></div>
      </div>
    </header>
  );
};
