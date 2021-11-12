import React from "react";
import {
  StyledPortfolioItem,
  StyledImage,
  ItemDetails,
} from "./PortfolioItem.styled";

import projectImage from "../../assets/images/project1.png";

const PortfolioItem = ({project}) => {
  return (
    <StyledPortfolioItem row>
      <StyledImage>
        <img src={projectImage} alt="Project" />
      </StyledImage>
      <ItemDetails>
        <h2>{project.title}</h2>
        <small>{project.category}</small>
        <p>
          {project.description}
        </p>
        <small>{project.techStack}</small>
      </ItemDetails>
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
