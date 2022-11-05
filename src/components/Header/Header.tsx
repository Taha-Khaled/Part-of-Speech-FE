import { FunctionComponent } from "react";
import styles from "./Header.module.scss";
interface props {}

const Header: FunctionComponent<props> = () => {
  return <h1 className={styles.Header}>Part of Speech Assignment</h1>;
};
export default Header;
