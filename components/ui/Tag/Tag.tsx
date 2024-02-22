import cn from "classnames";
import s from "./styles.module.scss";

interface iTag {
  className?: string;
  size?: "sm" | "md" | "lg";
  title: string;
}

export const Tag = ({ className, size = "md", title }: iTag) => {
  return (
    <div
      className={cn(className, s.tag, {
        [s.sm]: size === "sm",
        [s.md]: size === "md",
        [s.lg]: size === "lg",
      })}
    >
      {title}
    </div>
  );
};
