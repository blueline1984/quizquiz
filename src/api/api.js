import { shuffleArray } from "../utils/utils";
export const fetchQuizData = async (number, difficulty, category) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const data = await (
    await fetch(
      `${baseURL}amount=${number}&difficulty=${difficulty}&category=${category}&type=multiple`
    )
  ).json();

  return data.results.map((quizData) => ({
    ...quizData,
    answers: shuffleArray([
      ...quizData.incorrect_answers,
      quizData.correct_answer,
    ]),
  }));
};
