import { useState } from "react";
import Modal from "../components/Modal";
import Primarybutton from "../components/Button/Primarybutton";
import styled from "styled-components";

const Main = ({
  setQuiz,
  setIsOver,
  setIsLoading,
  setNumber,
  setUserAnswers,
  setCorrectAnswerNumber,
  setTimer,
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
      <MainWrapper>
        <div className="title">Quiz Quiz</div>
        <Primarybutton text="Get Started!" onClick={openModal} />
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
            setTimer={setTimer}
          />
        )}
      </MainWrapper>
      <QuestionWrapper>
        <img
          className="question-img-1"
          alt="question-1"
          src="images/question1.png"
          data-testid="image-1"
        />
        <img
          className="question-img-2"
          alt="question-2"
          src="images/question2.png"
          data-testid="image-2"
        />
        <img
          className="question-img-3"
          alt="question-3"
          src="images/question3.png"
          data-testid="image-3"
        />
      </QuestionWrapper>
    </div>
  );
};

const MainWrapper = styled.div`
  display: inline-block;
  position: absolute;
  left: 48%;
  top: 30%;

  .title {
    font-family: "Rubik Marker Hatch";
    font-size: 9vw;
    color: #50aa63;
  }
`;
const QuestionWrapper = styled.div`
  position: relative;

  .question-img-1 {
    position: absolute;
    width: 35%;
    top: 100%;
    left: 5%;
    transform: rotate(140deg);
    transition: all ease 1s;
  }

  .question-img-1:hover {
    transform: rotate(30deg);
  }

  .question-img-2 {
    position: absolute;
    width: 28%;
    top: -25%;
    left: 18%;
    transition: all ease 2s;
    transform: rotate(375deg);
  }

  .question-img-2:hover {
    transform: rotate(250deg);
  }

  .question-img-3 {
    position: relative;
    width: 25%;
    top: 0%;
    left: -3%;
    transform: rotate(345deg);
    transition: all ease 2s;
  }

  .question-img-3:hover {
    transform: rotate(0deg);
  }
`;

export default Main;
