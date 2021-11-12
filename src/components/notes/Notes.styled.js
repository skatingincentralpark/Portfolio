import styled from "styled-components";

export const StyledNotes = styled.ol`
  margin: 0;

  & li {
    /* padding: 0.25em 0; */
    color: #282828;
    font-family: "Courier New", Courier, monospace;
    font-family: "Baskerville";
    /* font-size: 1.2rem; */
  }
  & li::before {
    font-weight: 600;
  }
  /* & li:nth-child(odd) {
    background: #ededed;
  }
  & li:nth-child(even) {
    background: #cdcdcd;
  } */
`;
