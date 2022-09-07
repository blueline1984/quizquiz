import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInterval from "../hooks/useInterval";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";

const Quiz = ({
  quizNumber,
  question,
  answers,
  userAnswers,
  checkAnswer,
  moveToNextQuiz,
  moveToPrevQuiz,
  isOver,
  isLoading,
  number,
  quiz,
  timer,
  setTimer,
}) => {
  const [delay, setDelay] = useState(1000);
  const navigate = useNavigate();

  useInterval(() => {
    setTimer(timer + 1);
  }, delay);

  const handleQuitQuiz = () => {
    navigate("/");
  };
  const moveToResultPage = () => {
    setDelay(null);
    navigate("/result");
  };

  return (
    <QuizWrapper correct={userAnswers?.isCorrect}>
      <img
        src="/images/question1.png"
        alt="question1"
        style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          overflow: "hidden",
          rotate: "140deg",
        }}
      />
      <img
        src="/images/question2.png"
        alt="question2"
        style={{
          position: "absolute",
          top: "300px",
          left: "-30%",
          overflow: "hidden",
          rotate: "30deg",
        }}
      />
      <img
        src="/images/question3.png"
        alt="question3"
        style={{
          position: "absolute",
          top: "500px",
          left: "80%",
          overflow: "hidden",
          rotate: "300deg",
        }}
      />
      <div className="container">
        <p
          className="question"
          dangerouslySetInnerHTML={{ __html: `Q${quizNumber}. ${question}` }}
        ></p>
        <div className="options">
          {answers.map((answer) => (
            <ButtonWrapper
              key={answer}
              correct={userAnswers?.correctAnswer === answer}
              clicked={userAnswers?.checkedAnswer === answer}
            >
              <button
                disabled={userAnswers ? true : false}
                value={answer}
                onClick={checkAnswer}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </ButtonWrapper>
          ))}
        </div>
        <div className="indicator">
          {userAnswers ? (
            <>
              {userAnswers.isCorrect ? (
                <div>Correct Answer!</div>
              ) : (
                <div>Wrong Answer!</div>
              )}
              <div className="answer-result">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `Your Answer: ${userAnswers.checkedAnswer}`,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: `Correct Answer: ${userAnswers.correctAnswer}`,
                  }}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="btn">
        {!isOver && !isLoading && number > 0 && (
          <button className="prev-btn" onClick={moveToPrevQuiz}>
            {<MdArrowBackIos />}
          </button>
        )}
        {quizNumber === quiz?.length ? (
          <button className="result-btn" onClick={moveToResultPage}>
            Result
          </button>
        ) : (
          !isOver &&
          !isLoading &&
          userAnswers && (
            <button className="next-btn" onClick={moveToNextQuiz}>
              {<MdArrowForwardIos />}
            </button>
          )
        )}
      </div>
      <button className="quit-btn" onClick={handleQuitQuiz}>
        Quit
      </button>
    </QuizWrapper>
  );
};

const QuizWrapper = styled.div`
  position: absolute;
  left: 15%;
  top: 10%;
  width: 1600px;
  height: 800px;
  border: 1px solid #50aa63;
  border-radius: 10px;
  color: #50aa63;
  font-size: 1.75rem;
  background-color: #fff;

  .container {
    padding: 3% 9%;
  }

  .question {
    height: 50px;
  }

  .options {
    padding: 1% 0;
  }

  .indicator {
    position: absolute;
    display: flex;
    font-size: 1.5rem;
    white-space: nowrap;
    color: ${({ correct }) => (correct ? "#488FB1" : "#FF8080")};
  }

  .indicator .answer-result {
    display: flex;
    padding: 0 10%;
  }

  .indicator .answer-result div {
    padding: 0 5%;
  }

  .prev-btn {
    left: 0%;
    bottom: 50%;
    margin: 2%;
    position: absolute;
    font-size: 2rem;
    border: none;
    color: #50aa63;
    background-color: #fff;
  }

  .next-btn {
    left: 94%;
    bottom: 50%;
    margin: 2%;
    position: absolute;
    font-size: 2rem;
    border: none;
    color: #50aa63;
    background-color: #fff;
  }

  .result-btn {
    position: absolute;
    left: 75%;
    top: 80%;
    width: 11rem;
    height: 3rem;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
  }

  .result-btn:hover {
    color: #50aa63;
    background-color: #fff;
    border: 1px solid #50aa63;
  }

  .quit-btn {
    position: absolute;
    left: 45%;
    top: 80%;
    width: 7rem;
    height: 3rem;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
  }

  .quit-btn:hover {
    color: #50aa63;
    background-color: #fff;
    border: 1px solid #50aa63;
  }

  img {
    z-index: -1000;
  }
`;

const ButtonWrapper = styled.div`
  button {
    margin: 1% 0;
    padding: 0 2%;
    width: 95%;
    height: 5vh;
    font-size: 1.5rem;
    color: ${({ correct, clicked }) =>
      correct ? "#fff" : !correct && clicked ? "#fff" : "#50aa63"};
    background-color: ${({ correct, clicked }) =>
      correct ? "#488FB1" : !correct && clicked ? "#FF8080" : "#fff"};
    border: ${({ correct, clicked }) =>
      correct ? "none" : !correct && clicked ? "none" : "1px solid #50aa63"};
    border-radius: 10px;
    text-align: left;
  }

  button:hover:enabled {
    color: #fff;
    background-color: #50aa63;
  }

  button[disabled] {
    opacity: ${({ correct, clicked }) =>
      correct ? "none" : !correct && clicked ? "none" : "0.5"};
  }
`;

export default Quiz;
