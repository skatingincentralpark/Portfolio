import React, { useState } from "react";

import {
  StyledHeader,
  DesktopNav,
  MobileNav,
  Logo,
  Circle,
} from "./Header.styled";
import { Button } from "../styles/sharedStyles/Button.styled";
import { StyledLink } from "../styles/sharedStyles/Link.styled";
import { FlexSpaceBetween } from "../styles/sharedStyles/Flex.styled";
import Navlink from "./Navlink";

const Header = () => {
  const [showNav, setShowNav] = useState();

  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  const hideNavHandler = () => {
    setShowNav(false);
  };

  return (
    <>
      <StyledHeader open={showNav}>
        <FlexSpaceBetween row alignItemsCenter>
          <Logo>
            <StyledLink onClick={hideNavHandler} to="/">
              <span>Naked Lunch </span>
              <span>- Design and Code by Charles Zhao</span>
            </StyledLink>
          </Logo>
          <DesktopNav>
            <Navlink onClick={hideNavHandler} to="/portfolio">
              Portfolio
            </Navlink>
            <Navlink onClick={hideNavHandler} to="/about">
              About
            </Navlink>
          </DesktopNav>
          <Button onClick={showNavHandler}>
            <Circle />
          </Button>
        </FlexSpaceBetween>
      </StyledHeader>
      <MobileNav open={showNav}>
        <FlexSpaceBetween>
          <div>
            <div>Design and Code</div>
            <div>Charles Zhao</div>
          </div>
          <div>
            <Navlink onClick={hideNavHandler} color="black" to="/portfolio">
              Portfolio
            </Navlink>
            <Navlink onClick={hideNavHandler} color="black" to="/about">
              About
            </Navlink>
          </div>
        </FlexSpaceBetween>
      </MobileNav>
    </>
  );
};

export default Header;
