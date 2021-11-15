import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 13px;
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
    opacity: 0.6;
    line-height: 1.5;
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
