import React from "react";
import { StyledLink } from "../styles/sharedStyles/Link.styled";

const Navlink = ({ children, ...props }) => {
  return (
    <StyledLink activeStyle={{ background: "black" }} {...props}>
      {children}
    </StyledLink>
  );
};

export default Navlink;
