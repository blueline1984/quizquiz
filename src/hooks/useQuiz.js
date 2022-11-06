import useLocalStorage from "./useLocalStorage";

const useQuiz = () => {
  const [correctAnswerNumber, setCorrectAnswerNumber] = useLocalStorage(
    "correct-answer-data",
    0
  );
  const [number, setNumber] = useLocalStorage("quiz-number-data", 0);
  const [userAnswers, setUserAnswers] = useLocalStorage(
    "user-answers-data",
    []
  );
  const [isOver, setIsOver] = useLocalStorage("isOver-data", false);
  const [isLoading, setIsLoading] = useLocalStorage("isLoading-data", false);
  const [timer, setTimer] = useLocalStorage("timer-data", 0);
  const [quiz, setQuiz] = useLocalStorage("quiz-data", []);

  const checkAnswer = (event) => {
    const checkedAnswer = event.target.value;
    const isCorrect = quiz[number].correct_answer === checkedAnswer;
    const answerObject = {
      question: quiz[number].question,
      checkedAnswer,
      isCorrect,
      correctAnswer: quiz[number].correct_answer,
    };
    if (isCorrect) {
      setCorrectAnswerNumber((prevScore) => prevScore + 1);
    }

    if (!isOver) {
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const moveToNextQuiz = () => {
    const nextQuizNumber = number + 1;

    if (nextQuizNumber === quiz.length) {
      setIsOver(true);
    } else {
      setNumber(nextQuizNumber);
    }
  };
  const moveToPrevQuiz = () => {
    const prevQuizNumber = number - 1;

    if (prevQuizNumber >= 0) {
      setNumber(prevQuizNumber);
    }
  };

  return {
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
  };
};

export default useQuiz;
