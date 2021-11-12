import styled from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  transition: 0s;
  display: block;
  padding: 0.65rem;
  margin: 0.35rem;
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => !!props.isCurrent && "black"};

  &:active {
    transition: 0.1s;
    transform: scale(0.97);
    color: ${({ color }) => (color ? color : "chartreuse")};
    background: ${({ color }) => (color ? color : "chartreuse")};
  }
`;
