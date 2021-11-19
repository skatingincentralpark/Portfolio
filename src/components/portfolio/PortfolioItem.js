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

const PortfolioItem = ({ frontmatter, delay, html }) => {
  const [accOpen, setAccOpen] = useState(false);

  const image = getImage(frontmatter.image);

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
      accOpen={accOpen}
    >
      <a href={frontmatter.url} target="_blank" rel="noreferrer">
        <StyledImage>
          <GatsbyImage image={image} alt="Project thumbnail" />
        </StyledImage>
      </a>
      <ItemDetails>
        <FlexSpaceBetween row alignItemsCenter>
          <StyledAnchor href={frontmatter.url} target="_blank" rel="noreferrer">
            <h2>{frontmatter.title}</h2>
          </StyledAnchor>
          <small>{frontmatter.category}</small>
        </FlexSpaceBetween>
        <p>{frontmatter.description}</p>
        <AccordionItem
          accOpen={accOpen}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <PlainButton onClick={toggleAccordionHandler}>
          {accOpen ? "See Less..." : "See More..."}
        </PlainButton>
        <GradientText>{frontmatter.techStack}</GradientText>
      </ItemDetails>
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
