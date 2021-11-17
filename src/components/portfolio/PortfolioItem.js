import React, { useState } from "react";
import {
  StyledPortfolioItem,
  StyledImage,
  ItemDetails,
  GradientText,
  AccordionItem,
} from "./PortfolioItem.styled";
import { FlexSpaceBetween } from "../styles/sharedStyles/Flex.styled";
import { StyledAnchor } from "../styles/sharedStyles/Link.styled";
import { PlainButton } from "../styles/sharedStyles/Button.styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItem = ({ project, delay }) => {
  const [accOpen, setAccOpen] = useState(false);

  const image = getImage(project.image);

  const toggleAccordionHandler = () => {
    setAccOpen(!accOpen);
    console.log(accOpen);
  };

  return (
    <StyledPortfolioItem
      row
      data-sal="fade"
      data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
      data-sal-delay={delay} // adds delay to the animation (from 5 to 1000 ms)
      data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
    >
      <StyledImage>
        <GatsbyImage image={image} alt="Project thumbnail" />
      </StyledImage>
      <ItemDetails>
        <FlexSpaceBetween row alignItemsCenter>
          <h2>
            <StyledAnchor href={project.url} target="_blank" rel="noreferrer">
              {project.title}
            </StyledAnchor>
          </h2>
          <small>{project.category}</small>
        </FlexSpaceBetween>
        <p>{project.description}</p>
        <AccordionItem accOpen={accOpen}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            molestiae odio porro reprehenderit id error labore perspiciatis
            omnis tenetur ipsam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            molestiae odio porro reprehenderit id error labore perspiciatis
            omnis tenetur ipsam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            molestiae odio porro reprehenderit id error labore perspiciatis
            omnis tenetur ipsam.
          </p>
        </AccordionItem>
        <PlainButton onClick={toggleAccordionHandler}>
          <small>See More...</small>
        </PlainButton>
        <GradientText>{project.techStack}</GradientText>
      </ItemDetails>
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
