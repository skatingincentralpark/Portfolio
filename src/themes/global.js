import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 13px;
    overflow-y: scroll;
  }
  body {
    background: white;
    font-family: ${({ theme }) => theme.font.main};
    padding-top: 3rem;
    margin: 0;
  }
  ::selection {
  background: chartreuse;
  }
  p {
    line-height: 1.5;
  }
  h2 {
    margin: 0;
  }
  button {
    font-family: ${({ theme }) => theme.font.main};
    font-size: 13px;
  }
  small {
    font-size: 0.8rem;
  }
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: black;
  }

  /* scrollbar */
  body::-webkit-scrollbar {
    width: 6px;
  }
  body::-webkit-scrollbar-track {
    background: whitesmoke;
  }
  body::-webkit-scrollbar-thumb {
    background-color: rgb(184, 184, 184);
  }
`;

export default GlobalStyles;
