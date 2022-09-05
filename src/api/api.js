export const fetchQuizData = async (number, difficulty, category) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const data = await (
    await fetch(
      `${baseURL}amount=${number}&difficulty=${difficulty}&category=${category}&type=multiple`
    )
  ).json();

  return data.results.map((quizData) => ({
    ...quizData,
    answers: [...quizData.incorrect_answers, quizData.correct_answer].sort(
      () => Math.random - 0.5
    ),
  }));
};