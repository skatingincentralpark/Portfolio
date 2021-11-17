import styled from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  transition: 0.4s;
  display: block;
  padding: 0.65rem;
  margin: 0.35rem;
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  /* background: ${(props) => !!props.isCurrent && "black"}; */

  &:active {
    transition: 0s;
    transform: scale(0.95);
    color: ${({ color }) => (color ? color : "chartreuse")};
    background: ${({ color }) => (color ? color : "chartreuse")};
  }
`;

// Props => accepts "color" for active color and background
export const StyledNavLink = styled.div`
  & a {
    transition: 0.4s;
    display: block;
    padding: 0.65rem;
    margin: 0.35rem;
    background: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:active {
      transition: 0s;
      transform: scale(0.95);
      color: ${({ color }) => (color ? color : "chartreuse")};
      background: ${({ color }) => (color ? color : "chartreuse")};
    }
  }
`;

export const StyledAnchor = styled.a``;
