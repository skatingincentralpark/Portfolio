import styled from "styled-components";
import { FlexSpaceBetween } from "../styles/sharedStyles/Flex.styled";

export const StyledPortfolioItem = styled(FlexSpaceBetween)`
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: start;
  align-items: ${(props) => (props.accOpen ? "center" : "center")};
  margin-bottom: 3.5rem;

  & a,
  & button {
    transition: 1s;
    :hover {
      opacity: 0.7;
      transition: 0.25s;

      h2 {
        opacity: 0.5;
      }
      button {
        opacity: 0.5;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;
export const Slideshow = styled.div`
  position: relative;
  height: 15rem;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const Slide = styled.div`
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s linear 0s;

  opacity: ${({ selected }) => selected && "1"};
`;

export const StyledImage = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 1em;
  border: 1px dashed gray;
  transition: 0.1s;

  /* &:hover {
    border-color: black;
  } */

  & img {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 400px;
  }
`;

export const ItemDetails = styled.div`
  width: 100%;
  margin-right: 0;

  & h2 {
    font-weight: 400;
    border-radius: 4px;
  }
  & small:nth-child(2) {
    color: gray;
  }
  & small {
    font-family: ${({ theme }) => theme.font.mono};
  }
  & img {
    width: 100%;
  }
  & button {
    margin-bottom: 1em;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
  }
`;

export const AccordionItem = styled.div`
  overflow: hidden;

  height: ${({ accOpen }) => (!!accOpen ? "100%" : "0")};

  & p:first-child {
    margin-top: 0;
  }
`;

export const GradientText = styled.small`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: linear-gradient(90deg, #b7ff04, #c9fded);
  background-size: 400% 400%;
  animation: AnimationName 2s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
