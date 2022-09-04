import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchQuiz = () => {
  const [quizLists, setQuizLists] = useState([]);
  const [quizNumber, setQuizNumber] = useState(10);
  const [quizCategory, setQuizCategory] = useState("9");
  const [quizDifficulty, setQuizDifficulty] = useState("easy");

  const baseURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(
        `${baseURL}amount=${quizNumber}&difficulty=${quizDifficulty}&category=${quizCategory}`
      )
      .then((res) => {
        setQuizLists(
          res.data.results.map((quizList, index) => {
            return {
              id: index,
              questions: quizList.question,
              answer: quizList.correct_answer,
              options: [...quizList.incorrect_answers].sort(
                () => Math.random - 0.5
              ),
            };
          })
        );
      });
  }, []);

  return [
    quizLists,
    setQuizLists,
    quizNumber,
    setQuizNumber,
    quizCategory,
    setQuizCategory,
    quizDifficulty,
    setQuizDifficulty,
  ];
};
