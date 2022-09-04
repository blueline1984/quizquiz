import React from "react";

const QuizSelectBox = ({ options }) => {
  return (
    <select>
      {options.map((option) => (
        <option key={option.value} vlaue={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default QuizSelectBox;
