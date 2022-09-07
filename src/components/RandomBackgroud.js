import React from "react";
import styled from "styled-components";

function RandomBackgroud({ children }) {
  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <img
          src="/images/question1.png"
          alt="question1"
          style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            overflow: "hidden",
            rotate: "140deg",
          }}
        />
        <img
          src="/images/question2.png"
          alt="question2"
          style={{
            position: "absolute",
            top: "300px",
            left: "-10%",
            overflow: "hidden",
            rotate: "30deg",
          }}
        />
        <img
          src="/images/question3.png"
          alt="question3"
          style={{
            position: "absolute",
            top: "500px",
            left: "80%",
            overflow: "hidden",
            rotate: "300deg",
          }}
        />
      </div>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3% 2%;
  width: auto;
  height: 100vh;
  font-size: 3rem;
  color: #50aa63;
  overflow: hidden;

  .category {
    margin: 1%;
    text-decoration: underline;
  }

  button {
    position: relative;
    left: 45%;
    top: 10%;
    width: 7rem;
    height: 3rem;
    font-size: 1rem;
    font-family: "Secular One", sans-serif;
    color: #fff;
    background-color: #50aa63;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    color: #50aa63;
    background-color: #fff;
    border: 1px solid #50aa63;
  }

  img {
    margin: 0;
    padding: 0;
    z-index: -1;
  }
`;

export default RandomBackgroud;
