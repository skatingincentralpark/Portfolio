import React from "react";

import { AboutContainer } from "../components/styles/sharedStyles/Container.styled";

const AboutPage = () => {
  return (
    <AboutContainer>
      <p>
        Homeland is a social media web app that replicates key features found
        popular platforms.
      </p>
      <p>
        The aim was to gain a better understanding of the interaction between
        the front and back end.
      </p>
      <p>
        The most difficult part of this project was becoming comfortable with
        Redux. Initially I struggled with old states which I should have cleared
        and ensuring the correct/consistent data was passed to the states
        through API calls.
      </p>
    </AboutContainer>
  );
};

export default AboutPage;
