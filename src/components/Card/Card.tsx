import { FunctionComponent } from "react";
import styles from "./Card.module.scss";
interface props {
  text: string;
  type: "Word" | "Rank";
}
const Card: FunctionComponent<props> = ({ text, type }) => {
  return (
    <div className={styles.CardContainer}>
      <div className={styles[`${type}Card`]}>{text}</div>
    </div>
  );
};
export default Card;
