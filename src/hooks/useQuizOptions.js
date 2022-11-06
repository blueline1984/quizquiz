import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useQuizOptions = () => {
  const [quiz, setQuiz] = useLocalStorage("quiz-data", []);
  const [amount, setAmount] = useState("10");
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("9");

  const handleNumber = (event) => {
    setAmount(event.target.value);
  };

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return {
    quiz,
    amount,
    difficulty,
    category,
    setQuiz,
    setAmount,
    setDifficulty,
    setCategory,
    handleNumber,
    handleDifficulty,
    handleCategory,
  };
};

export default useQuizOptions;
