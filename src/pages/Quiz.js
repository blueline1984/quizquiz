import React from "react";

const Quiz = ({ quizNumber, question, answers, userAnswers }) => {
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: `Q${quizNumber} ${question}` }}></p>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={userAnswers ? true : false} value={answer}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
      <button>Prev Quiz</button>
      <button>Next Quiz</button>
    </>
  );
};

export default Quiz;
