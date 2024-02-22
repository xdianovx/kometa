import s from "./styles.module.scss";

interface iFeatureItem {
  data: any;
}

export const FeatureItem = ({ data }: iFeatureItem) => {
  return (
    <div className={s.item}>
      <div className={s.top}>
        <div className={s.num}>{data.num}</div>
        <p className={s.suptitle}>{data.suptitle}</p>
      </div>
      <div className={s.text}>{data.text}</div>
    </div>
  );
};
