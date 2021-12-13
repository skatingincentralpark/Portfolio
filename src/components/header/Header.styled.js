import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ open }) => (open ? "#eeeeee" : "white")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 98;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    height: 3rem !important;
  }

  & button {
    @media (min-width: ${({ theme }) => theme.mobile}) {
      display: none;
    }
  }
`;

export const DesktopNav = styled.nav`
  display: none;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: flex;
  }
`;

export const MobileNav = styled.nav`
  position: fixed;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-110%)")};
  z-index: 97;
  height: 30vh;
  width: 100%;
  padding-bottom: 1.5rem;

  background: ${({ open }) => (open ? "#eeeeee" : "white")};
  border-bottom: 1px solid #fffff;

  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);

  & div div:first-child * {
    padding: 0.25rem 1rem 0.45rem 1rem;
  }

  & div div:first-child div:first-child {
    font-family: "Courier New";
  }

  & div div:first-child div:nth-child(2) {
    font-family: "Courier New";
    font-size: 0.8rem;
  }

  & div div:last-child * {
    display: inline;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

export const Logo = styled.div`
  & span:nth-child(1) {
    font-family: ${({ theme }) => theme.font.main};
    font-weight: 400;
    border-radius: 6px;

    @media (min-width: ${({ theme }) => theme.mobile}) {
      font-weight: 600;
    }
  }
  & span:nth-child(2) {
    font-family: ${({ theme }) => theme.font.mono};
    display: none;

    @media (min-width: ${({ theme }) => theme.mobile}) {
      display: inline;
    }
  }
`;

export const Circle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background: black;
  border-radius: 50%;

  &:active {
    background: white;
  }
`;
