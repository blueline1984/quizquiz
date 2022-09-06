import React, { useState } from "react";

const Result = ({ quiz, correctAnswerNumber }) => {
  const totalQuizNumber = quiz.length;
  const quizCategory = quiz[0].category;
  return (
    <>
      <h1>{quizCategory}</h1>
      <div>
        <div>Icon</div>
        <div>{`${correctAnswerNumber} / ${totalQuizNumber}`}</div>
      </div>
    </>
  );
};

export default Result;
