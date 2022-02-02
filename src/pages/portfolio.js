import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo/seo";

import PortfolioItem from "../components/portfolio/PortfolioItem";
import { Container } from "../components/styles/sharedStyles/Container.styled";

const PortfolioPage = (props) => {
  const {
    data: {
      projects: { edges },
    },
  } = props;

  return (
    <Container>
      <SEO />
      {edges.map(({ node: { frontmatter, html } }, i) => (
        <PortfolioItem
          key={i}
          frontmatter={frontmatter}
          html={html}
          delay={i * 100}
        />
      ))}
    </Container>
  );
};

export const query = graphql`
  query PortfolioQuery {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            category
            description
            techStack
            title
            url
            image {
              childImageSharp {
                gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
          html
        }
      }
    }
  }
`;

export default PortfolioPage;
