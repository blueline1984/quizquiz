import styled from "styled-components";

const Primarybutton = ({ text, onClick }) => {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  );
};

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 100px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    color: #50aa63;
    background-color: #ffffff;
    border: 1px solid #50aa63;
  }
`;

export default Primarybutton;
