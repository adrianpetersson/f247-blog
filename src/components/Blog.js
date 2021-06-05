import React from "react";
import { SectionWrapper } from "../styles/SectionLayout";
import Headings from "./Headings";
import BlogCards from "./BlogCards";

const Blog = ({ featured, data }) => {
  return (
    <SectionWrapper>
      <Headings data={data} />
      <BlogCards featured={featured} />
    </SectionWrapper>
  );
};

export default Blog;
