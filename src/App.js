import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

import "./App.css";

const App = () => {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isOver, setIsOver] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            setQuiz={setQuiz}
            setIsOver={setIsOver}
            setIsLoading={setIsLoading}
          />
        }
      ></Route>
      <Route
        path="/quiz"
        element={
          !isLoading &&
          !isOver && (
            <Quiz
              quizNumber={number + 1}
              question={quiz[number].question}
              answers={quiz[number].answers}
              userAnswers={userAnswers ? userAnswers[number] : undefined}
            />
          )
        }
      ></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
};

export default App;
