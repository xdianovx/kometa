import Image from "next/image";
import s from "./styles.module.scss";
import { LinkUnderline, Tag, Title } from "..";

interface iPortfolioItem {
  data: any;
}

export const PortfolioItem = ({ data }: iPortfolioItem) => {
  return (
    <div className={s.item}>
      <div className={s.wrap}>
        <div className={s.image}>
          <Image src={`/${data.image}`} fill alt={data.title} />
        </div>

        <div className={s.content}>
          <div className={s.tags}>
            {data.tags?.map((item: any, idx: string) => (
              <Tag title={item} key={idx} />
            ))}
          </div>
          <Title tag="h3" uppercase className={s.title}>
            {data.title}
          </Title>

          <p className={s.text}>{data.short_text}</p>

          <div className={s.bottom}>
            <p className={s.date}>{data.created_at}</p>
            <LinkUnderline href={`/portfolio/${data.slug}`} title="подробнее" />
          </div>
        </div>
      </div>

      <div className={s.hr}></div>
    </div>
  );
};
