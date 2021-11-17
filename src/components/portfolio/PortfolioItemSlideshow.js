import React, { useState, useEffect } from "react";
import useInterval from "../../hooks/useInterval";

import {
  StyledPortfolioItem,
  StyledImage,
  ItemDetails,
  Slideshow,
  Slide,
} from "./PortfolioItem.styled";
import { StyledAnchor } from "../styles/sharedStyles/Link.styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItemSlideshow = ({ project, delay }) => {
  const image = getImage(project.image);
  const image2 = getImage(project.image2);

  const [slides, setSlides] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    if ((image, image2)) {
      setSlides([image, image2]);
    }
  }, [image, image2]);

  useInterval(() => {
    if (currIndex === slides.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex((prev) => prev + 1);
    }
  }, 2000);

  return (
    <StyledPortfolioItem
      row
      data-sal="fade"
      data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
      data-sal-delay={delay} // adds delay to the animation (from 5 to 1000 ms)
      data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
    >
      <Slideshow>
        {slides.map((img, i) => (
          <Slide key={i} selected={currIndex === i && true}>
            <StyledImage>
              <GatsbyImage image={img} alt="Project thumbnail" />
            </StyledImage>
          </Slide>
        ))}
      </Slideshow>
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

export default PortfolioItemSlideshow;
