import { useNavigate } from "react-router-dom";
import QuizSelectBox from "./QuizSelectBox";
import SecondaryButton from "./Button/SecondaryButton";
import { fetchQuizData } from "../api/api";
import useQuizOptions from "../hooks/useQuizOptions";
import { AMOUNT, CATEGORY, DIFFICULTY } from "../config/quizSelectOption";

const Form = () => {
  const {
    quiz,
    amount,
    difficulty,
    category,
    setQuiz,
    handleNumber,
    handleDifficulty,
    handleCategory,
  } = useQuizOptions();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newQuiz = await fetchQuizData(amount, difficulty, category);
    setQuiz(newQuiz);
    navigate("/quiz");
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuizSelectBox options={AMOUNT} onChange={handleNumber} />
      <QuizSelectBox options={CATEGORY} onChange={handleCategory} />
      <QuizSelectBox options={DIFFICULTY} onChange={handleDifficulty} />
      <SecondaryButton text="Start" />
    </form>
  );
};

export default Form;
