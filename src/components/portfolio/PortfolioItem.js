import React, { useState } from "react";
import {
  StyledPortfolioItem,
  StyledImage,
  ItemDetails,
  GradientText,
  AccordionItem,
  NoteText,
} from "./PortfolioItem.styled";
import { FlexSpaceBetween } from "../styles/sharedStyles/Flex.styled";
import { PlainButton } from "../styles/sharedStyles/Button.styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItem = ({ frontmatter, delay, html }) => {
  const [accOpen, setAccOpen] = useState(false);
  const [displayImage, setDisplayImage] = useState(() => {
    if (!!frontmatter.image) {
      return getImage(frontmatter.image);
    } else {
      return frontmatter.imageGif.publicURL;
    }
  });

  const toggleAccordionHandler = () => {
    setAccOpen(!accOpen);
  };

  return (
    <div
      data-sal="fade"
      data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
      data-sal-delay={delay} // adds delay to the animation (from 5 to 1000 ms)
      data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
    >
      <StyledPortfolioItem row accOpen={accOpen}>
        <a href={frontmatter.url} target="_blank" rel="noreferrer">
          <StyledImage>
            {!!frontmatter.image ? (
              <GatsbyImage image={displayImage} alt="Project thumbnail" />
            ) : (
              <img
                src={displayImage}
                alt="Project thumbnail"
                style={{ display: "flex" }}
              />
            )}
          </StyledImage>
        </a>
        <ItemDetails>
          <FlexSpaceBetween row alignItemsCenter>
            <a href={frontmatter.url} target="_blank" rel="noreferrer">
              <h2>{frontmatter.title}</h2>
            </a>
            <small>{frontmatter.category}</small>
          </FlexSpaceBetween>
          {frontmatter.note && <NoteText>{frontmatter.note}</NoteText>}
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
    </div>
  );
};

export default PortfolioItem;
