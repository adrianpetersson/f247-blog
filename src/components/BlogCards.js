import React from "react";
import data from "../data/content";
import styled from "styled-components";
import BlogCard from "./BlogCard";

const blogData = data.blogPosts;

const BlogCards = (props) => {
  return (
    <BlogWrapper featured={props.featured}>
      {blogData
        .filter((posts) => posts.meta.featured === props.featured)
        .map((item) => (
          <BlogCard item={item} key={item.meta.id} />
        ))}
    </BlogWrapper>
  );
};

const BlogWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 900px) {
     {
      grid-template-columns: ${(props) =>
        props.featured ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
    }
  }
`;

export default BlogCards;
