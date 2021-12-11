import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;

  @media (min-width: ${({ theme }) => theme.mobile}) {
  }
`;

export const AboutContainer = styled.div`
  padding: 1em;
  text-align: right;
  margin-left: 10rem;

  a {
    line-height: 1.5;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin-left: auto;
    width: 40vw;
  }
`;

export const PortfolioContainer = styled.div`
  padding: 1em;

  @media (min-width: ${({ theme }) => theme.mobile}) {
  }
`;
