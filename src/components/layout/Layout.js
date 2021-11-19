import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../themes/global";
import Header from "../header/Header";

const theme = {
  font: {
    main: "Helvetica, Courier New, monospace",
    serif: "Baskerville",
    mono: "Courier New, monospace",
  },
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
