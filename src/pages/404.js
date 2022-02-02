import SEO from "../components/seo/seo";
import * as React from "react";
import { Container } from "../components/styles/sharedStyles/Container.styled";

const NotFoundPage = () => {
  return (
    <>
      <SEO />
      <Container>Nothing Here</Container>
    </>
  );
};

export default NotFoundPage;
