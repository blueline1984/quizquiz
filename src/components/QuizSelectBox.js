import styled from "styled-components";

const QuizSelectBox = ({ label, options, onChange }) => {
  return (
    <QuizSelectBoxWrapper>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        onChange={(event) => {
          onChange(event);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </QuizSelectBoxWrapper>
  );
};

const QuizSelectBoxWrapper = styled.div`
  display: flex;
  position: relative;
  width: 15em;
  height: 2em;
  border-radius: 0.25em;
  margin: 30px;
  margin-left: 50px;
  padding-bottom: 30px;
  align-items: center;
  color: #50aa63;

  select {
    width: 300%;
    height: 100%;
    margin: 0;
    padding: 0.2rem 0.5rem;
    color: #50aa63;
    cursor: pointer;
    border: 1px solid #50aa63;
    border-radius: 5px;
  }

  select:hover {
    outline: 3px solid #50aa63;
  }
`;

export default QuizSelectBox;
