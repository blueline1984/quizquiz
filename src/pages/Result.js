import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Result = ({ quiz, correctAnswerNumber }) => {
  const totalQuizNumber = quiz.length;
  const quizCategory = quiz[0].category;
  const timer = useLocalStorage("timer");

  return (
    <>
      <h1>{quizCategory}</h1>
      <div>
        <div>Icon</div>
        <div>{timer[0]}</div>
      </div>
      <div>
        <div>Icon</div>
        <div>{`${correctAnswerNumber} / ${totalQuizNumber}`}</div>
      </div>
    </>
  );
};

export default Result;
