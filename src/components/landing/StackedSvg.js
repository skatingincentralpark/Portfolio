import React from "react";

import Bone1 from "../../assets/svg/bone1.svg";
import Bone2 from "../../assets/svg/bone2.svg";
import Bone3 from "../../assets/svg/bone3.svg";

import { StyledStackedSvg } from "./StackedSvg.styled";

const StackedSvg = () => {
  return (
    <StyledStackedSvg>
      <Bone1 />
      <Bone2 />
      <Bone3 />
    </StyledStackedSvg>
  );
};

export default StackedSvg;
