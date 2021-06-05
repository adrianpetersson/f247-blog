import React from "react";
import data from "../data/content";
import { Typography } from "../styles/Typography";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Blog from "../components/Blog";

const HomePage = () => (
  <>
    <Typography />
    <GlobalStyles />
    <Header />
    <Blog data={data.blogHeader.text} featured={true} />
    <Blog data={data.blogHeader1.text} featured={false} />
    <Footer />
  </>
);

export default HomePage;

//
