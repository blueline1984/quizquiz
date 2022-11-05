import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Portal from "../Potal";
import QuizSelectBox from "../components/QuizSelectBox";
import { AMOUNT, CATEGORY, DIFFICULTY } from "../config/quizSelectOption";
import { fetchQuizData } from "../api/api";
import SecondaryButton from "./Button/SecondaryButton";
import styled from "styled-components";

const Modal = ({
  message,
  backgroundColor,
  informationContent,
  closeModal,
  setQuiz,
  setIsOver,
  setIsLoading,
  setNumber,
  setUserAnswers,
  setCorrectAnswerNumber,
  setTimer,
}) => {
  const [amount, setAmount] = useState("10");
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("9");
  const navigate = useNavigate();

  const handleNumber = (event) => {
    setAmount(event.target.value);
  };

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsOver(false);

    const newQuiz = await fetchQuizData(amount, difficulty, category);
    setQuiz(newQuiz);
    setUserAnswers([]);
    setNumber(0);
    setCorrectAnswerNumber(0);
    setTimer(0);
    setIsLoading(false);
    navigate("/quiz");
  };

  return (
    <Portal>
      <ModalOverlay>
        <ModalBody style={{ backgroundColor: `${backgroundColor}` }}>
          <ModalContent>{message}</ModalContent>
          {informationContent}
          <form onSubmit={handleSubmit}>
            <QuizSelectBox
              label="Number"
              options={AMOUNT}
              hadleSelectBox={handleNumber}
            />
            <QuizSelectBox
              label="Category"
              options={CATEGORY}
              hadleSelectBox={handleCategory}
            />
            <QuizSelectBox
              label="Difficulty"
              options={DIFFICULTY}
              hadleSelectBox={handleDifficulty}
            />
            <SecondaryButton text="Start" type="submit" />
            <SecondaryButton onClick={closeModal} text="Cancel" />
          </form>
        </ModalBody>
      </ModalOverlay>
    </Portal>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  zindex: 1000;
`;

const ModalBody = styled.div`
  position: fixed;
  width: 1000px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  zindex: 1000;
  border: 2px solid #50aa63;
  border-radius: 20px;
`;

const ModalContent = styled.div`
  display: block;
  justify-content: center;
  padding: 3% 0 0 0;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  align-items: center;
  text-align: center;

  h1 {
    border-bottom: 1px solid #fff;
    border-spacing: 5px 1rem;
    margin-bottom: 7%;
    font-size: 70px;
    color: #fff;
  }
`;

export default Modal;
