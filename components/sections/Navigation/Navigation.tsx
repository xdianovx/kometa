"use client";

import { $isOpen } from "../../../store/store";
import { useUnit } from "effector-react";
import classNames from "classnames";

import s from "./styles.module.scss";
import Link from "next/link";
import { Socials } from "@/components/ui";

export const Navigation = () => {
  const isOpen = useUnit($isOpen);

  const links = [
    { id: 1, title: "Портфолио", slug: "/portfolio" },
    { id: 2, title: "Команда", slug: "/komanda" },
    { id: 3, title: "Блог", slug: "/blog" },
    { id: 4, title: "Контакты", slug: "/contacts" },
    { id: 5, title: "О Нас", slug: "/onas" },
    { id: 6, title: "Услуги", slug: "/uslugi" },
  ];

  return (
    <div
      className={classNames(s.navigation, {
        [s.active]: isOpen,
      })}
    >
      <div className="container">
        <div className={s.wrap}>
          <nav className={s.nav}>
            {links.map((item) => (
              <Link href={item.slug} key={item.id} className={s.link}>
                {item.title}
              </Link>
            ))}
          </nav>

          <div className={s.bottom}>
            <Socials />
          </div>
          <div className={s.hr}></div>
        </div>
      </div>
      {/* <div className={s.overflow}></div> */}
    </div>
  );
};
