import React from "react";
import { useNavigate } from "react-router-dom";
import ResultSection from "../components/ResultSection";
import useLocalStorage from "../hooks/useLocalStorage";
import { chageTimer } from "../utils/utils";
import { BiTime } from "react-icons/bi";
import { ImCheckmark2 } from "react-icons/im";
import { RiBarChart2Line } from "react-icons/ri";
import styled from "styled-components";
import Chart from "../components/Chart";

const Result = ({ quiz, correctAnswerNumber }) => {
  const quizTotalNumber = quiz.length;
  const quizCategory = quiz[0].category;
  const [timer] = useLocalStorage("timer");

  const navigate = useNavigate();

  const moveOnToMain = () => {
    navigate("/");
  };

  return (
    <Container>
      <div className="category">{quizCategory}</div>
      <ResultSectionWrapper>
        <ResultSection icon={<BiTime />} content={chageTimer(timer)} />
        <ResultSection
          icon={<ImCheckmark2 />}
          content={`${correctAnswerNumber} / ${quizTotalNumber}`}
        />
        <ResultSection
          icon={<RiBarChart2Line />}
          content={
            <Chart quiz={quiz} correctAnswerNumber={correctAnswerNumber} />
          }
        />
      </ResultSectionWrapper>
      <button onClick={moveOnToMain}>Back To Main</button>
    </Container>
  );
};

const Container = styled.div`
  padding: 3% 2%;
  width: auto;
  height: 100vh;
  border: 3px solid red;
  font-size: 3rem;
  color: #50aa63;

  .category {
    margin: 1%;
    text-decoration: underline;
  }

  button {
    position: absolute;
    left: 45%;
    top: 80%;
    width: 7rem;
    height: 3rem;
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

const ResultSectionWrapper = styled.div`
  display: flex;
  left: 0;
`;

export default Result;
