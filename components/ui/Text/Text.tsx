import cn from "classnames";
import s from "./styles.module.scss";

interface iText {
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Text = ({ children, className, size = "md" }: iText) => {
  switch (size) {
    case "lg":
      return <p className={cn(className, s.text, s.lg, {})}>{children}</p>;

    default:
      break;
  }
};
