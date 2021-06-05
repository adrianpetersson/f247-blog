import React from "react";
import Headings from "./Headings";
import bannerImg from "../assets/images/banner.jpg";
import bannerSm from "../assets/images/banner-sm.png";
import Logo from "./Logo";
import styled from "styled-components";
import data from "../data/content";
import { Layout, SectionWrapper } from "../styles/SectionLayout";

const Header = () => (
  <Layout img={bannerImg} imgSm={bannerSm}>
    <SectionWrapper height="70vh">
      <HeadlineWrapper>
        <Headings data={data.hero.text} />
      </HeadlineWrapper>
      <Wrapper>
        <Logo />
      </Wrapper>
    </SectionWrapper>
  </Layout>
);

const HeadlineWrapper = styled.div`
  margin-right: auto;
`;
const Wrapper = styled.div`
  margin-left: auto;
`;

export default Header;
