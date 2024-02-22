import Link from "next/link";
import s from "./styles.module.scss";
import cn from "classnames";

interface iLinkUnderline {
  className?: string;
  href: string;
  title: string;
}

export const LinkUnderline = ({ className, href, title }: iLinkUnderline) => {
  return (
    <Link href={href} className={cn(className, s.link)}>
      {title}
    </Link>
  );
};
