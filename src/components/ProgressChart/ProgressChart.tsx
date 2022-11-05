import { LinearProgress } from "@material-ui/core";
import { FunctionComponent } from "react";
import styles from "./ProgressChart.module.scss";
interface props {
  questionNumber: number;
}
const ProgressChart: FunctionComponent<props> = ({ questionNumber }) => {
  const currentProgress = (questionNumber - 1) * 10;
  return (
    <div className={styles.ProgressContainer}>
      <div className={styles.LinearProgress}>
        <LinearProgress variant="determinate" value={currentProgress} />
      </div>
      <span className={styles.ProgressPercentage}>{currentProgress}%</span>
    </div>
  );
};
export default ProgressChart;
