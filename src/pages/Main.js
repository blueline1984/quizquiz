import { useState } from "react";
// import Modal from "../components/Modal";
import Modal from "../components/Modal/Modal";
import Primarybutton from "../components/Button/Primarybutton";
import useModal from "../hooks/useModal";
import useQuiz from "../hooks/useQuiz";
import Form from "../components/Form";
import styled from "styled-components";

const Main = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    setQuiz,
    setIsOver,
    setIsLoading,
    setNumber,
    setUserAnswers,
    setCorrectAnswerNumber,
    setTimer,
  } = useQuiz();

  return (
    <>
      <MainWrapper>
        <MainTitle className="title">Quiz Quiz</MainTitle>
        <Primarybutton text="Get Started!" onClick={openModal} />
        {isModalOpen && (
          // <Modal
          //   setQuiz={setQuiz}
          //   setIsOver={setIsOver}
          //   setIsLoading={setIsLoading}
          //   setNumber={setNumber}
          //   setUserAnswers={setUserAnswers}
          //   setCorrectAnswerNumber={setCorrectAnswerNumber}
          //   setTimer={setTimer}
          // />
          <Modal
            children={<Form />}
            openModal={openModal}
            closeModal={closeModal}
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
    </>
  );
};

const MainWrapper = styled.div`
  display: inline-block;
  position: absolute;
  left: 48%;
  top: 30%;
`;

const MainTitle = styled.div`
  font-family: "Rubik Marker Hatch";
  font-size: 9vw;
  color: #50aa63;
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
