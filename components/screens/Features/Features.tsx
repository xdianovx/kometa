import { FeatureItem, Text } from "@/components/ui";

import s from "./styles.module.scss";

export const Features = () => {
  const items = [
    {
      id: 1,
      num: 7,
      suptitle: "лет",
      text: "Безупречной репутации, исследований рынка и успешного взаимодействия с клиентами.",
    },
    {
      id: 2,
      num: 15,
      suptitle: "человек",
      text: "Безупречной репутации, исследований рынка и успешного взаимодействия с клиентами.",
    },
    {
      id: 3,
      num: "20",
      suptitle: "чашек кофе",
      text: "Безупречной репутации, исследований рынка и успешного взаимодействия с клиентами.",
    },
    {
      id: 4,
      num: 7,
      suptitle: "лет",
      text: "Безупречной репутации, исследований рынка и успешного взаимодействия с клиентами.",
    },
  ];

  return (
    <section className={s.section}>
      <div className="container">
        <Text size="lg">
          Помогаем вашим проектам достигать поставленных целей и создаем <br />
          уникальный стиль, сквозь который передаем суть ваших идей.
        </Text>

        <div className={s.wrap}>
          {items.map((item) => (
            <FeatureItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
