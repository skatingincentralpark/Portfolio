import React from "react";

import Seo from "../components/seo/seo";

import Resume from "../assets/pdf/CharlesZhao_Resume_Web.pdf";

import { AboutContainer } from "../components/styles/sharedStyles/Container.styled";
import { StyledHR } from "../components/styles/sharedStyles/HR.styled";
import {
  StyledLinkNoPadding,
  StyledAnchor,
} from "../components/styles/sharedStyles/Link.styled";

const AboutPage = () => {
  return (
    <AboutContainer
      data-sal="fade"
      data-sal-duration="1500"
      data-sal-delay="0"
      data-sal-easing="ease"
    >
      <Seo />
      <p>
        Charles Zhao
        <br />
        Development & Design
        <br />
        Currently based in Sydney, Australia
      </p>
      <StyledAnchor
        href="mailto:charles.zhao5461@gmail.com"
        target="_blank"
        rel="noreferrer"
        id="email"
      >
        charles.zhao5461@gmail.com
      </StyledAnchor>
      <br />
      <StyledAnchor href={Resume} target="_blank" rel="noreferrer" id="email">
        Resume
      </StyledAnchor>
      <br />
      <StyledAnchor
        href="https://github.com/skatingincentralpark"
        target="_blank"
        rel="noreferrer"
        id="email"
      >
        Github
      </StyledAnchor>
      <StyledAnchor
        href="https://au.linkedin.com/in/charleszhao1645"
        target="_blank"
        rel="noreferrer"
        id="email"
      >
        Linkedin
      </StyledAnchor>
    </AboutContainer>
  );
};

export default AboutPage;
