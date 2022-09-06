import React from "react";
import styled from "styled-components";

function ResultSection({ icon, content }) {
  return (
    <Wrapper>
      <div className="icon">{icon}</div>
      <div className="content">{content}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: 1%;
  width: 500px;
  height: 600px;
  top: 2rem;
  flex: 1;
  border: 1px solid #50aa63;
  border-radius: 30px;
  font-size: 4rem;
  text-align: center;
  background: #50aa63;
  color: #fff;

  .icon {
    padding: 3% 0 0 0;
    border: 1px solid blue;
  }

  .content {
    position: relative;
    top: 20%;
    border: 1px solid blue;
    font-size: 6rem;
  }
`;

export default ResultSection;
