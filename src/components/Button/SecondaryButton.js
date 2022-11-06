import styled from "styled-components";

const SecondaryButton = ({ onClick, text }) => {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  );
};

const Button = styled.button`
  margin: 1rem;
  padding: 1rem;
  width: 7rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: 10px;
  border: none;

  &:hover {
    color: #50aa63;
    background-color: #fff;
    border: 1px solid #50aa63;
  }
`;

export default SecondaryButton;
