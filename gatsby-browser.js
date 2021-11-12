import React from "react";
import Layout from "./src/components/layout/Layout";

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
