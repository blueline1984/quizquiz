import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import useLocalStorage from "./hooks/useLocalStorage";
import useQuiz from "./hooks/useQuiz";

const App = () => {
  const {
    correctAnswerNumber,
    number,
    userAnswers,
    isLoading,
    isOver,
    timer,
    setTimer,
    quiz,
    setQuiz,
    setIsOver,
    setIsLoading,
    setNumber,
    setUserAnswers,
    checkAnswer,
    moveToNextQuiz,
    moveToPrevQuiz,
    setCorrectAnswerNumber,
  } = useQuiz();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            setQuiz={setQuiz}
            setIsOver={setIsOver}
            setIsLoading={setIsLoading}
            setNumber={setNumber}
            setUserAnswers={setUserAnswers}
            setCorrectAnswerNumber={setCorrectAnswerNumber}
            setTimer={setTimer}
          />
        }
      ></Route>
      <Route
        path="/quiz"
        element={
          <Quiz
            quizNumber={number + 1}
            question={quiz[number]?.question}
            answers={quiz[number]?.answers}
            userAnswers={userAnswers ? userAnswers[number] : undefined}
            checkAnswer={checkAnswer}
            moveToPrevQuiz={moveToPrevQuiz}
            moveToNextQuiz={moveToNextQuiz}
            isOver={isOver}
            isLoading={isLoading}
            number={number}
            useAnswersArray={userAnswers}
            quiz={quiz}
            timer={timer}
            setTimer={setTimer}
          />
        }
      ></Route>
      <Route
        path="/result"
        element={
          <Result quiz={quiz} correctAnswerNumber={correctAnswerNumber} />
        }
      ></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
