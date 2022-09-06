import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Quiz = ({
  quizNumber,
  question,
  answers,
  userAnswers,
  checkAnswer,
  nextQuiz,
  prevQuiz,
  isOver,
  isLoading,
  number,
  useAnswersArray,
  quiz,
}) => {
  const navigate = useNavigate();
  const handleQuitQuiz = () => {
    navigate("/");
  };
  const moveOnToResultPage = () => {
    navigate("/result");
  };

  console.log(useAnswersArray);

  return (
    <Wrapper correct={userAnswers?.isCorrect}>
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
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
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
              <div className="compareAnswer">
                <div>Your Answer: {userAnswers.checkedAnswer} </div>
                <div>Correct Answer: {userAnswers.correctAnswer}</div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="btn">
        {!isOver && !isLoading && number > 0 && (
          <button className="prev-btn" onClick={prevQuiz}>
            {`<`}
          </button>
        )}
        {useAnswersArray?.length !== quiz?.length ? (
          !isOver &&
          !isLoading &&
          userAnswers && (
            // userAnswers &&
            // number !== userAnswers.length - 1 &&
            <button className="next-btn" onClick={nextQuiz}>
              {`>`}
            </button>
          )
        ) : (
          <button className="result-btn" onClick={moveOnToResultPage}>
            Result
          </button>
        )}
      </div>
      <button className="quit-btn" onClick={handleQuitQuiz}>
        Quit
      </button>
    </Wrapper>
  );
};

//correct={userAnswers.checkAnswer === answer} clicked={userAnswers}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -20vw 0 0 -35vw;
  width: 70vw;
  height: 40vw;
  border: 1px solid #50aa63;
  border-radius: 10px;
  color: #50aa63;
  font-size: 1.75rem;

  .container {
    padding: 3% 9%;
  }

  .options {
    padding: 1% 0;
  }

  .indicator {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    white-space: nowrap;
    color: ${({ correct }) => (correct ? "#488FB1" : "#FF8080")};
  }

  .indicator .compareAnswer {
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
  }

  .indicator .compareAnswer div {
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
    cursor: pointer;
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
    cursor: pointer;
  }

  .result-btn {
    position: absolute;
    left: 75%;
    top: 80%;
    width: 11rem;
    height: 3rem;
    font-size: 1rem;
    font-family: "Secular One", sans-serif;
    color: #fff;
    background-color: #50aa63;
    border-radius: 10px;
    border: none;
    cursor: pointer;
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
    font-family: "Secular One", sans-serif;
    color: #fff;
    background-color: #50aa63;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  .quit-btn:hover {
    color: #50aa63;
    background-color: #fff;
    border: 1px solid #50aa63;
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
