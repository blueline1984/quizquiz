import React, { useState } from "react";
import Modal from "../components/Modal";

const Main = ({
  setQuiz,
  setIsOver,
  setIsLoading,
  setNumber,
  setUserAnswers,
  setCorrectAnswerNumber,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="title">Quiz Quiz</div>
        <button onClick={openModal}>Get Started!</button>
        {isModalOpen && (
          <Modal
            backgroundColor="#fff"
            closeModal={closeModal}
            setQuiz={setQuiz}
            setIsOver={setIsOver}
            setIsLoading={setIsLoading}
            setNumber={setNumber}
            setUserAnswers={setUserAnswers}
            setCorrectAnswerNumber={setCorrectAnswerNumber}
          />
        )}
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
