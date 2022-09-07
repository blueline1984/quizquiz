import styled from "styled-components";

const ResultSection = ({ icon, content }) => {
  return (
    <ResultSectionWrapper>
      <div className="icon">{icon}</div>
      <div className="content">{content}</div>
    </ResultSectionWrapper>
  );
};

const ResultSectionWrapper = styled.div`
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
  }

  .content {
    position: relative;
    display: flex;
    height: 70%;
    font-size: 6rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
`;

export default ResultSection;
