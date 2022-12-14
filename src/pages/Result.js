import { useNavigate } from "react-router-dom";
import ResultSection from "../components/ResultSection";
import Chart from "../components/Chart";
import Background from "../components/Background";
import SecondaryButton from "../components/Button/SecondaryButton";
import useLocalStorage from "../hooks/useLocalStorage";
import { chageTimer } from "../utils/utils";
import { BiTime } from "react-icons/bi";
import { ImCheckmark2 } from "react-icons/im";
import { RiBarChart2Line } from "react-icons/ri";
import styled from "styled-components";

const Result = ({ quiz, correctAnswerNumber }) => {
  const quizTotalNumber = quiz.length;
  const quizCategory = quiz[0].category;
  const [timer] = useLocalStorage("timer-data");

  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/");
  };

  return (
    <Background>
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
      <SecondaryButton onClick={moveToMain} text="Back To Main" />
    </Background>
  );
};

const ResultSectionWrapper = styled.div`
  display: flex;
  left: 0;
`;

export default Result;
