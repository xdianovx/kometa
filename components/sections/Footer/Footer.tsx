import { Logo } from "@/components/ui";
import s from "./styles.module.scss";
import Link from "next/link";

export const Footer = () => {
  const links = [
    { id: 1, title: "Портфолио", slug: "/portfolio" },
    { id: 2, title: "Команда", slug: "/komanda" },
    { id: 3, title: "Блог", slug: "/blog" },
    { id: 4, title: "Контакты", slug: "/contacts" },
    { id: 5, title: "О Нас", slug: "/onas" },
    { id: 6, title: "Услуги", slug: "/uslugi" },
  ];

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.top}>
          <div className={s.top__logo}>
            <Logo white />
            <p>
              115280, РОССИЯ, МОСКВА, УЛ. ЛЕНИНСКАЯ СЛОБОДА, Д.19, СТР.1,
              БИЗНЕС-ЦЕНТР «ОМЕГА ПЛАЗА», ГРУППА КОМПАНИЙ KOKOC GROUP
            </p>
          </div>

          <nav className={s.nav}>
            {links.map((item) => (
              <Link href={item.slug} key={item.id} className={s.link}>
                {item.title}
              </Link>
            ))}
          </nav>

          <div className={s.top__right}>
            <Link href="tel:+79933380888">+7 993 338 08 88</Link>
            <Link href="mailto:office@kometa.ru">office@kometa.ru</Link>
          </div>
        </div>

        <div className={s.hr}></div>

        <div className={s.bottom}>
          <Link href="/policy">Политика конфиденциальности</Link>
          <Link href="/policy">Политика конфиденциальности</Link>
          <p className={s.copyright}>©2018 — 2024 KOMETA</p>
        </div>
      </div>
    </footer>
  );
};
