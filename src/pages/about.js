import React from "react";

import { AboutContainer } from "../components/styles/sharedStyles/Container.styled";
import { StyledLinkNoPadding } from "../components/styles/sharedStyles/Link.styled";

const AboutPage = () => {
  return (
    <AboutContainer
      data-sal="fade"
      data-sal-duration="1500"
      data-sal-delay="0"
      data-sal-easing="ease"
    >
      <p>
        Hi, I'm Charlie! I'm a developer/designer with a love for creating
        practical and beautiful web apps.
      </p>
      <p>
        2 years ago I used Squarespace to create a website. There were features
        I wanted to implement however they required more advanced knowledge of
        code.
      </p>
      <p>
        I began learning web development through Udemy and realised a lot of
        negative beliefs I had about coding had been false. I came to see the
        web as a blank canvas and code as the tools and material.
      </p>
      <p>
        Within 1.5 years, alongside part-time jobs, I learnt web development
        from online courses on Udemy and Youtube, which provided me the
        knowledge to build several live projects:{" "}
        <StyledLinkNoPadding to="/portfolio">
          A MERN web app, an e-commerce web app and 2 portfolios
        </StyledLinkNoPadding>
        .
      </p>
    </AboutContainer>
  );
};

export default AboutPage;
