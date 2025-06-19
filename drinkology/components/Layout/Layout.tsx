import React from "react";

import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CssBaseline } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          "& #__next": {
            margin: 0,
            padding: 0,
          },
        },
        html: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ overflow: "hidden" }}>
      <Head>
        <title>Drinkology</title>
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  </ThemeProvider>
);

export default Layout;
