import React from "react";

import { AboutContainer } from "../components/styles/sharedStyles/Container.styled";

const AboutPage = () => {
  return (
    <AboutContainer
      data-sal="fade"
      data-sal-duration="1500"
      data-sal-delay="0"
      data-sal-easing="ease"
    >
      <p>
        I'm Charlie! I'm a developer/designer with a love for creating practical
        and beautiful web apps.
      </p>
      <p>
        2 years ago I created a website for my brand on Squarespace. While
        implementing my own CSS, I found that I enjoyed having complete control
        of the process.
      </p>
      <p>
        I began learning web development through Udemy and realised a lot of
        beliefs I had about coding had been false. I came to see the web as a
        blank canvas and code as the tools and material.
      </p>
      <p>
        Within 1.5 years, alongside part-time jobs, I learnt web development
        from online courses on Udemy and Youtube, which provided me the
        knowledge to create a MERN app, e-commerce site and 2 portfolios.
      </p>
    </AboutContainer>
  );
};

export default AboutPage;
