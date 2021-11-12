import styled from "styled-components";

export const Button = styled.button`
  display: block;
  padding: 0.65rem;
  margin: 0.35rem;
  background: none;
  border: none;
  transition: 0.5s;
  border-radius: 6px;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
    color: chartreuse;
    transition: 0.1s;
    background: chartreuse;
  }
`;
