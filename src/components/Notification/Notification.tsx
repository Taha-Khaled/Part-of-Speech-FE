import { FunctionComponent, useEffect } from "react";
import styles from "./Notification.module.scss";
interface props {
  show?: boolean;
  setShow: (value: boolean) => void;
  title: string;
  isError?: boolean;
}
const Notification: FunctionComponent<props> = ({
  show,
  title,
  setShow,
  isError = false,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div
      className={styles.Notification}
      data-show={show}
      data-error={isError}
      onClick={() => {
        setShow(false);
      }}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Notification;
