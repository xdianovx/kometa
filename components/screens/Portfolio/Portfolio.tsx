import { Button, PortfolioItem, Title } from "@/components/ui";
import s from "./styles.module.scss";
import { SUBRESOURCE_INTEGRITY_MANIFEST } from "next/dist/shared/lib/constants";

export const Portfolio = () => {
  const items = [
    {
      id: 1,
      title: "длинный Заголовок проекта который умещается в две строчки",
      image: "img/showreel.jpg",
      short_text:
        "Сделали дизайн, фронтенд, кастомную админку. Запустили рекламу в instagram и telegram. Сделали дизайн, фронтенд, кастомную админку. Запустили рекламу в instagram и telegram.",
      created_at: "14.02.2023",
      slug: "project",
      tags: ["фронтенд", "Маркетинг", "Бекенд"],
    },
    {
      id: 2,
      title: "Заголовок проекта",
      image: "img/showreel.jpg",
      short_text:
        "Сделали дизайн, фронтенд, кастомную админку. Запустили рекламу в instagram и telegram. Сделали дизайн, фронтенд, кастомную админку. Запустили рекламу в instagram и telegram.",
      created_at: "14.02.2023",
      slug: "project",
      tags: ["Под ключ"],
    },
    {
      id: 3,
      title: "длинный Заголовок проекта который умещается в две строчки",
      image: "img/showreel.jpg",
      short_text:
        "Сделали дизайн, фронтенд, кастомную админку. Запустили рекламу в instagram и telegram. Сделали дизайн, фронтенд, кастомную админку. Запустили рекламу в instagram и telegram.",
      created_at: "14.02.2023",
      slug: "project",
      tags: ["фронтенд", "Маркетинг", "Бекенд"],
    },
    {
      id: 4,
      title: "длинный Заголовок проекта который умещается в две строчки",
      image: "img/showreel.jpg",
      short_text:
        "Сделали дизайн, фронтенд, кастомную админку. Запустили рекламу в instagram и telegram. Сделали дизайн, фронтенд, кастомную админку. Запустили рекламу в instagram и telegram.",
      created_at: "14.02.2023",
      slug: "project",
      tags: ["фронтенд", "Маркетинг", "Бекенд"],
    },
  ];

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.top}>
          <Title tag="h2" uppercase>
            Наши <br />
            работы
          </Title>

          <Button size="sm" href="/portfolio">
            Все работы
          </Button>
        </div>

        <div className={s.hr}></div>

        <div className={s.cards}>
          {items.map((item: any) => (
            <PortfolioItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
