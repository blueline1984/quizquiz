import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

import "./App.css";

const App = () => {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isOver, setIsOver] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  console.log("userAnswers", userAnswers);

  //퀴즈 정답여부 확인 함수
  const checkAnswer = (event) => {
    console.log(event);
    //분리 가능
    const checkedAnswer = event.target.value;
    const isCorrect = quiz[number].correct_answer === checkedAnswer;
    const answerObject = {
      question: quiz[number].question,
      checkedAnswer,
      isCorrect,
      correctAnswer: quiz[number].correct_answer,
    };

    if (!isOver) {
      if (isCorrect) {
        console.log("correct");
      } else {
        console.log("wrong");
      }
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuiz = () => {
    const nextQuizNumber = number + 1;

    if (nextQuizNumber === quiz.length) {
      setIsOver(true);
      console.log("문제 끝");
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
          />
        }
      ></Route>
      <Route
        path="/quiz"
        element={
          !isLoading &&
          !isOver && (
            <Quiz
              quizNumber={number + 1}
              question={quiz[number].question}
              answers={quiz[number].answers}
              userAnswers={userAnswers ? userAnswers[number] : undefined}
              checkAnswer={checkAnswer}
              prevQuiz={prevQuiz}
              nextQuiz={nextQuiz}
              isOver={isOver}
              isLoading={isLoading}
              number={number}
            />
          )
        }
      ></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
};

export default App;
