import { FunctionComponent } from "react";
import styles from "./Loader.module.scss";
import { CircularProgress } from "@material-ui/core";

interface Props {}

const Loader: FunctionComponent<Props> = () => {
  return (
    <div className={styles.Loader} data-testid="loader-spinner">
      <CircularProgress color="inherit" size={40} />
    </div>
  );
};

export default Loader;
