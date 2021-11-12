import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ open }) => (open ? "chartreuse" : "white")};
  border-bottom: 1px solid black;
  border-color: ${({ open }) => (open ? "forestgreen" : "white")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ open }) => (open ? "calc(3.5rem + 30vh)" : "3rem")};
  transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;
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
  position: absolute;
  top: 2.5rem;
  z-index: 97;
  height: 30vh;
  width: 100%;
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
    /* padding: 0 0 0 1rem; */
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
  & span {
    display: none;

    @media (min-width: ${({ theme }) => theme.mobile}) {
      display: inline;
    }
  }
`;
