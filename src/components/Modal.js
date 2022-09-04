import React, { useState } from "react";
import styled from "styled-components";
import Portal from "../Potal";
import QuizSelectBox from "../components/QuizSelectBox";
import { NUMBER, CATEGORY, DIFFICULTY } from "../config/quizSelect";
import { fetchQuizData } from "../api/api";

const Modal = ({
  message,
  backgroundColor,
  informationContent,
  closeModal,
}) => {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };
  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const test = await fetchQuizData(number, difficulty, category);
    setQuiz(test);
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
              options={NUMBER}
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
            <button type="submit">Start</button>
            <button onClick={closeModal}>Cancel</button>
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

  button {
    display: flex;
    position: relative;
    left: 40%;
    margin: 1rem;
    padding: 1rem;
    width: 7rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: "Secular One", sans-serif;
    color: #fff;
    background-color: #50aa63;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    color: #50aa63;
    background-color: #fff;
    border: 1px solid #50aa63;
  }
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

  button {
    margin: 3%;
    border: 1px solid #fff;
    padding: 10px 15px;
    width: 70%;
    font-size: 35px;
    color: #fff;
  }
`;

export default Modal;
