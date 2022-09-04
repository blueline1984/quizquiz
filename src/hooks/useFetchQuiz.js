import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchQuiz = (quizNumber, quizDifficulty, quizCategory) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const [quizLists, setQuizLists] = useState([]);

  const fetchData = () => {
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
  };

  useEffect(() => {
    fetchData();
  }, [quizNumber, quizDifficulty, quizCategory]);

  return quizLists;
};
