import Link from "next/link";
import s from "./styles.module.scss";
import cn from "classnames";

interface iButton {
  children: React.ReactNode;
  href?: string;
  style?: "fill" | "outline";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
}

export const Button = ({
  children,
  href,
  style = "fill",
  size = "md",
  arrow = false,
}: iButton) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(s.btn, {
          [s.md]: size === "md",
          [s.sm]: size === "sm",
        })}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={cn(s.btn, {
          [s.md]: size === "md",
        })}
      >
        {children}
      </button>
    );
  }
};
