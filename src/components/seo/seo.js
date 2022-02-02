import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import defaultImage from "../../assets/images/seo.png";

const SEO = () => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { title, description, author, siteUrl } = site.siteMetadata;

  const seo = {
    title: title,
    description: description,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      meta=
      {[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: `og:image`,
          content: seo.image,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ]}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
        image
        siteUrl
      }
    }
  }
`;
