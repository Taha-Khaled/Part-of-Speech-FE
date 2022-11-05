import { FunctionComponent } from "react";
import styles from "./ButtonsList.module.scss";
interface props {
  List: string[];
  onClick: (value: string) => void;
}
const ButtonsList: FunctionComponent<props> = ({ List, onClick }) => {
  return (
    <div className={styles.ButtonsList}>
      {List.map((item: string, index: number) => (
        <button
          key={index}
          className={styles.Button}
          onClick={() => onClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default ButtonsList;
