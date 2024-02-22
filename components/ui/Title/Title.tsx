import s from "./styles.module.scss";
import cn from "classnames";

interface iTitle {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4";
  className?: string;
  uppercase?: boolean;
}

export const Title = ({
  children,
  tag,
  className,
  uppercase = false,
}: iTitle) => {
  switch (tag) {
    case "h1":
      return (
        <h1
          className={cn(s.h1, className, {
            [s.uppercase]: uppercase,
          })}
        >
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2
          className={cn(s.h2, className, {
            [s.uppercase]: uppercase,
          })}
        >
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3
          className={cn(s.h3, className, {
            [s.uppercase]: uppercase,
          })}
        >
          {children}
        </h3>
      );
  }
};
