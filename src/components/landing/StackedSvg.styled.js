import styled from "styled-components";

export const StyledStackedSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  & * {
    position: fixed;
    width: 30rem;

    @media (min-width: ${({ theme }) => theme.mobile}) {
      width: 40rem;
    }
  }

  & svg:nth-child(1) {
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  & svg:nth-child(3) {
    animation-name: spin2;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin2 {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  }
`;
