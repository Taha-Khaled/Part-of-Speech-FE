import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Header />
      <Questions />
    </div>
  );
}

export default App;
