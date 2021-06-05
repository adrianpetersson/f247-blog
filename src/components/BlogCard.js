import React from "react";
import styled from "styled-components";
import { Paragraph, StyledSpan } from "../styles/Typography";
import rightArrow from "../assets/icons/f24s_icon_right-arrow.svg";
import breakpoints from "../constants/breakpoints";

const BlogCard = ({ item }) => {
  return (
    <>
      <CardWrapper key={item.meta.id}>
        <ContentWrapper>
          <h3>{item.content.title}</h3>
          <StyledSpan featured={item.meta.featured}>
            {item.meta.readTime}
          </StyledSpan>
        </ContentWrapper>
        <StyledSpan featured={item.meta.featured}>{item.meta.date}</StyledSpan>
        <VerticalLine featured={item.meta.featured}></VerticalLine>
        <StyledSpan featured={item.meta.featured}>{item.meta.time}</StyledSpan>
        <VerticalLine featured={item.meta.featured}></VerticalLine>
        <StyledSpan featured={item.meta.featured}>
          {item.meta.category}
        </StyledSpan>
        <ContentWrapper featured={item.meta.featured}>
          <Icon
            featured={item.meta.featured}
            src={item.img.src}
            alt={item.img.alt}
          />
          <Paragraph>{item.content.preamble}</Paragraph>
          <RightArrowLink href={item.meta.link}>
            <RightArrow src={rightArrow} alt="Link to post" />
          </RightArrowLink>
        </ContentWrapper>
      </CardWrapper>
    </>
  );
};

const VerticalLine = styled.div`
  display: ${(props) => (props.featured ? "none" : "inline")};
  border-left: 1px solid #ccc;
  margin: 0 10px;
  height: 1rem;
`;

const CardWrapper = styled.div`
  max-width: 600px;
  cursor: pointer;
`;
const RightArrow = styled.img`
  max-width: 40px;
`;
const RightArrowLink = styled.a`
  margin-top: auto;
  transition: all 0.2s ease-in-out;
  ${CardWrapper}:hover & {
    transform: scale(1.2);
  }
  @media (max-width: ${breakpoints.screenSM}) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.featured ? "column" : "row")};
  justify-content: space-between;
  padding-top: 2rem;
  @media (max-width: ${breakpoints.screenSM}) {
    flex-direction: column;
  }
`;
const Icon = styled.img`
  height: 200px;
  width: ${(props) => (props.featured ? "100%" : "200px")};
  padding-right: 1rem;
  object-fit: cover;
  @media (max-width: ${breakpoints.screenSM}) {
    width: 100%;
    padding-right: 0rem;
  }
`;
export default BlogCard;
