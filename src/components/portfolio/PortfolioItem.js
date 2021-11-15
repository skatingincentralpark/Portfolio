import React from "react";
import {
  StyledPortfolioItem,
  StyledImage,
  ItemDetails,
} from "./PortfolioItem.styled";
import { StyledAnchor } from "../styles/sharedStyles/Link.styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItem = ({ project, delay }) => {
  const image = getImage(project.image);

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
        <h2>
          <StyledAnchor href={project.url} target="_blank" rel="noreferrer">
            {project.title}
          </StyledAnchor>
        </h2>
        <small>{project.category}</small>
        <p>{project.description}</p>
        <small>{project.techStack}</small>
      </ItemDetails>
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
