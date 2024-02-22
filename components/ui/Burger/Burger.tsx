"use client";

import cn from "classnames";
import s from "./styles.module.scss";
import { $isOpen, toggleNavigation } from "../../../store/store";
import { useUnit } from "effector-react";

interface iBurger {
  className?: string;
}

export const Burger = ({ className }: iBurger) => {
  const [isOpen, handleClicked] = useUnit([$isOpen, toggleNavigation]);

  return (
    <button
      onClick={handleClicked}
      className={cn(s.burger, className, {
        [s.active]: isOpen,
      })}
    >
      <span />
      <span />
    </button>
  );
};
