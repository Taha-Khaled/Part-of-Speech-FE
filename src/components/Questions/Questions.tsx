import { FunctionComponent, useEffect, useState } from "react";
import ButtonsList from "../ButtonsList/ButtonsList";
import ProgressChart from "../ProgressChart/ProgressChart";
import Loader from "../Loader/Loader";
import styles from "./Questions.module.scss";
import Card from "../Card/Card";
import { getRank, getWords } from "../../api";
import { TNotification, TRanks, TWords } from "../../types";
import Notification from "../Notification/Notification";

interface props {}

const options = ["noun", "adverb", "adjective", "verb"];

const Questions: FunctionComponent<props> = () => {
  const [showQuestions, setShowQuestions] = useState<boolean>(true);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [words, setWords] = useState<TWords[]>([]);
  const [score, setScore] = useState<number>(0);
  const [rank, setRank] = useState<string>("calculating...");
  const [notification, setNotification] = useState<TNotification>({
    title: "",
    show: false,
  });

  useEffect(() => {
    showQuestions
      ? //if we are at the question section so we need to fetch words
        getWords({ list_length: 10 }).then((res: TWords[]) => {
          setWords(res);
        })
      : //else if we are at the rank section so we need to fetch our rank
        getRank({ score }).then((res: TRanks) => {
          setRank(`${res.rank}%`);
        });
  }, [showQuestions]);

  const handelSelectedSolution = (value: string) => {
    //check if the answer is right
    if (value == words[questionNumber - 1].pos) {
      setScore(score + 10);
      setNotification({
        title: "Correct 👏",
        show: true,
      });
    } else {
      setNotification({
        title: "incorrect ❌",
        show: true,
        isError: true,
      });
    }
    //handel which section to show
    questionNumber == 10
      ? setShowQuestions(false)
      : showQuestions && setQuestionNumber(questionNumber + 1);
  };

  const handelTryAgain = () => {
    //reset all status to the initial state
    setWords([]);
    setScore(0);
    setRank("calculating...");
    setQuestionNumber(1);
    setShowQuestions(true);
  };

  return (
    <div className={styles.Questions}>
      <Notification
        {...notification}
        setShow={(show: boolean) => {
          setNotification((old: TNotification) => ({ ...old, show }));
        }}
      />
      {words.length == 0 ? (
        //if no words so it's fetching so we need UI to tell the user that our data is loading
        <Loader />
      ) : showQuestions ? (
        //question section
        <>
          <span className={styles.QuestionNum}>Question #{questionNumber}</span>
          <ProgressChart questionNumber={questionNumber} />
          <Card text={words[questionNumber - 1].word} type={"Word"} />
          <ButtonsList
            List={options}
            onClick={(value: string) => handelSelectedSolution(value)}
          />
        </>
      ) : (
        //rank section
        <>
          <Card text={`Here's Your Rank : ${rank}`} type={"Rank"} />
          <ButtonsList List={["try again"]} onClick={handelTryAgain} />
        </>
      )}
    </div>
  );
};
export default Questions;
