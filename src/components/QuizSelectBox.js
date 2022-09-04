import React from "react";

const QuizSelectBox = ({ label, options, hadleSelectBox }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        onChange={(event) => {
          hadleSelectBox(event);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default QuizSelectBox;
