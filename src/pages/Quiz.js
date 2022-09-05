import React from "react";

const Quiz = ({
  quizNumber,
  question,
  answers,
  userAnswers,
  checkAnswer,
  nextQuiz,
  prevQuiz,
  isOver,
  isLoading,
  number,
}) => {
  console.log("userAnswers", userAnswers);
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: `Q${quizNumber} ${question}` }}></p>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button
              disabled={userAnswers ? true : false}
              value={answer}
              onClick={checkAnswer}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
        {!isOver && !isLoading && number > 0 && (
          <button onClick={prevQuiz}>Prev Quiz</button>
        )}
        {!isOver && !isLoading && userAnswers && (
          // userAnswers &&
          // number !== userAnswers.length - 1 &&
          <button onClick={nextQuiz}>Next Quiz</button>
        )}
      </div>
    </>
  );
};

export default Quiz;
