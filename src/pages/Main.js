import React from "react";

const Main = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="title">Quiz Quiz</div>
        <button>Get Started!</button>
      </div>
      <div className="questions">
        <img
          className="question-img-1"
          alt="question-1"
          src="image/question1.png"
        />
        <img
          className="question-img-2"
          alt="question-2"
          src="image/question2.png"
        />
        <img
          className="question-img-3"
          alt="question-3"
          src="image/question3.png"
        />
      </div>
    </div>
  );
};

export default Main;
