import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import useLocalStorage from "./hooks/useLocalStorage";

import "./App.css";

const App = () => {
  const [correctAnswerNumber, setCorrectAnswerNumber] = useLocalStorage(
    "score-data",
    0
  );
  const [quiz, setQuiz] = useLocalStorage("quiz-data", []);
  const [number, setNumber] = useLocalStorage("number", 0);
  const [userAnswers, setUserAnswers] = useLocalStorage("userAnswers", []);
  const [isOver, setIsOver] = useLocalStorage("isOver", false);
  const [isLoading, setIsLoading] = useLocalStorage("isLoading", false);
  const [timer, setTimer] = useLocalStorage("timer", 0);

  const checkAnswer = (event) => {
    const checkedAnswer = event.target.value;
    const isCorrect = quiz[number].correct_answer === checkedAnswer;
    const answerObject = {
      question: quiz[number].question,
      checkedAnswer,
      isCorrect,
      correctAnswer: quiz[number].correct_answer,
    };
    if (isCorrect) {
      setCorrectAnswerNumber((prevScore) => prevScore + 1);
    }

    if (!isOver) {
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuiz = () => {
    const nextQuizNumber = number + 1;

    if (nextQuizNumber === quiz.length) {
      setIsOver(true);
    } else {
      setNumber(nextQuizNumber);
    }
  };
  const prevQuiz = () => {
    const prevQuizNumber = number - 1;

    if (prevQuizNumber >= 0) {
      setNumber(prevQuizNumber);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            setQuiz={setQuiz}
            setIsOver={setIsOver}
            setIsLoading={setIsLoading}
            setNumber={setNumber}
            setUserAnswers={setUserAnswers}
            setCorrectAnswerNumber={setCorrectAnswerNumber}
            setTimer={setTimer}
          />
        }
      ></Route>
      <Route
        path="/quiz"
        element={
          <Quiz
            quizNumber={number + 1}
            question={quiz[number]?.question}
            answers={quiz[number]?.answers}
            userAnswers={userAnswers ? userAnswers[number] : undefined}
            checkAnswer={checkAnswer}
            prevQuiz={prevQuiz}
            nextQuiz={nextQuiz}
            isOver={isOver}
            isLoading={isLoading}
            number={number}
            useAnswersArray={userAnswers}
            quiz={quiz}
            timer={timer}
            setTimer={setTimer}
          />
        }
      ></Route>
      <Route
        path="/result"
        element={
          <Result quiz={quiz} correctAnswerNumber={correctAnswerNumber} />
        }
      ></Route>
    </Routes>
  );
};

export default App;
