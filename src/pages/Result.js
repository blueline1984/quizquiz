import React from "react";
import ResultSection from "../components/ResultSection";
import useLocalStorage from "../hooks/useLocalStorage";
import { chageTimer } from "../utils/utils";

const Result = ({ quiz, correctAnswerNumber }) => {
  const quizTotalNumber = quiz.length;
  const quizCategory = quiz[0].category;
  const [timer] = useLocalStorage("timer");

  return (
    <>
      <h1>{quizCategory}</h1>
      <ResultSection icon="icon" content={chageTimer(timer)} />
      <ResultSection
        icon="icon"
        content={`${correctAnswerNumber} / ${quizTotalNumber}`}
      />
      <ResultSection />
    </>
  );
};

export default Result;
