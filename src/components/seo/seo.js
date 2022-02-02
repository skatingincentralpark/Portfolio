import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import defaultImage from "../../assets/images/seo.png";

const Seo = ({ description, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;

        const metaTitle = title || data.site.siteMetadata.title;

        const metaAuthor = author || data.site.siteMetadata.author;

        const metaUrl = url || data.site.siteMetadata.siteUrl;

        const metaImage = `${data.site.siteMetadata.siteUrl}${defaultImage}`;

        return (
          <Helmet
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]}
          />
        );
      }}
    />
  );
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
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

export default Seo;
