import styled from "styled-components";
import { FlexSpaceBetween } from "../styles/sharedStyles/Flex.styled";

export const StyledPortfolioItem = styled(FlexSpaceBetween)`
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: start;
  align-items: ${(props) => (props.accOpen ? "start" : "center")};
  margin-bottom: 3rem;
  border-bottom: ${(props) =>
    props.accOpen ? "1px dashed lightgray" : "none"};
  padding-bottom: ${(props) => (props.accOpen ? "2rem" : "none")};

  & a,
  & button {
    transition: opacity 0.5s;
    :hover {
      opacity: 0.9;
      transition: opacity 0.1s;

      h2 {
        opacity: 0.6;
        transition: opacity 0.1s;
      }
      button {
        opacity: 0.6;
        transition: opacity 0.1s;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    gap: 2rem;
    margin-bottom: 2rem;
    padding-bottom: ${(props) => (props.accOpen ? "2rem" : "none")};
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
  transition: 0.1s;
  box-shadow: 0.2rem 0.3em 1rem rgba(0, 0, 0, 0.4);
  transition: transform 0.5s;

  &:hover {
    transition: transform 0.1s;
    transform: scale(0.99);
  }

  & img {
    width: 100%;
    background: #b7ff04;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 400px;
  }
`;

export const ItemDetails = styled.div`
  width: 100%;
  margin-right: 0;

  & h2 {
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 400;
  }
  & p {
    color: gray;
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

  height: ${({ accOpen }) => (!!accOpen ? "fit-content" : "0")};
  /* transition: 1s; */

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
