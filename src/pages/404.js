import Seo from "../components/seo/seo";
import * as React from "react";
import { Container } from "../components/styles/sharedStyles/Container.styled";

const NotFoundPage = () => {
  return (
    <>
      <Seo />
      <Container>Nothing Here</Container>
    </>
  );
};

export default NotFoundPage;
