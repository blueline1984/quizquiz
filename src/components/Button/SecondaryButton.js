import styled from "styled-components";

const SecondaryButton = ({ onClick, type, text }) => {
  return (
    <>
      <Button onClick={onClick} type={type}>
        {text}
      </Button>
    </>
  );
};

const Button = styled.button`
  display: flex;
  position: relative;
  left: 40%;
  margin: 1rem;
  padding: 1rem;
  width: 7rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
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
