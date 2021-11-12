import React from "react";

import PortfolioItem from "../components/portfolio/PortfolioItem";
import { Container } from "../components/styles/sharedStyles/Container.styled";

const PortfolioPage = () => {
  const project1 = {
    title: "Goriot",
    category: "E-Commerce",
    description:
      "People at the Cherry Festival in Traverse City rushed to keep this carnival. Feel free to ask anything about the journey. Not going to lie, it was a hard slog.",
    techStack: "Gatsby (React), Graphql, Shopify",
  };

  return (
    <Container>
      <PortfolioItem project={project1} />
      <PortfolioItem project={project1} />
      <PortfolioItem project={project1} />
    </Container>
  );
};

export default PortfolioPage;
