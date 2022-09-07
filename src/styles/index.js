import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Secular One" , sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }

  button {
    font-family: "Secular One", sans-serif;
    background-color: #50aa63;
    color: #fff;
    cursor: pointer;
  }
`;

export default GlobalStyle;
