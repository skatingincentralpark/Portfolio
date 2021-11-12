import styled from "styled-components";
import { FlexSpaceBetween } from "../styles/sharedStyles/Flex.styled";

export const StyledPortfolioItem = styled(FlexSpaceBetween)`
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: start;
  align-content: center;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    gap: 2rem;
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 1em;
  border: 1px dashed gray;
  transition: 0.1s;

  &:hover {
    border-color: black;
  }

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

  & small:nth-child(2) {
    color: gray;
  }

  & small:last-child {
    padding: 0.25rem 0.5rem;
    border-radius: 1em;
    font-style: italic;
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
  }

  & img {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
  }
`;
