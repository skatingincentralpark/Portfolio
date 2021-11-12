import React, { useState } from "react";
import { StyledLink } from "../styles/sharedStyles/Link.styled";

const Navlink = ({ children, ...props }) => {
  const [isCurrent, setIsCurrent] = useState();

  const isActive = ({ isCurrent }) => {
    setIsCurrent(!!isCurrent);
  };

  return (
    <StyledLink getProps={isActive} isCurrent={isCurrent} {...props}>
      {children}
    </StyledLink>
  );
};

export default Navlink;
