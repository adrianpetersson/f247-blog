import styled, { createGlobalStyle } from 'styled-components'
import breakpoints from '../constants/breakpoints'
import RationalBold from '../assets/fonts/RationalText-Bold.woff'
import RationalBold2 from '../assets/fonts/RationalText-Bold.woff2'
import RationalBook from '../assets/fonts/RationalText-Book.woff'
import RationalBook2 from '../assets/fonts/RationalText-Book.woff'
import RationalMedium from '../assets/fonts/RationalText-Medium.woff'
import RationalMedium2 from '../assets/fonts/RationalText-Medium.woff2'


const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Rational';
    src: url(${RationalBold});
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Rational';
    src: url(${RationalMedium});
    font-style: normal;
    font-weight:normal;
  }

`

const Headline = styled.h1`
  text-align:center;
  line-height:64px;
  font-size: 60px;
  font-weight: 700;
  letter-spacing:.025em;
  padding-bottom:0.6rem;

  @media (max-width: ${breakpoints.screenSM}) {
    font-size:26px;
    line-height:28px;
  }
`

const Title = styled.h2`
  font-size: ${props => props.size || "34px"};
  font-weight: 600;
  line-height:34px;
  max-width:30vw;

  text-align:center;
  letter-spacing: -0.015em;

  
  @media (max-width: ${breakpoints.screenSM}) {
    font-size:21px;
    line-height:24px;
  }
`

const Subtitle = styled.h3`
  font-size: 1em;
  font-weight: 400;
  text-transform: uppercase;
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height:26px;
  max-width:${props => props.width || "100%"};
  text-align:${props => props.asTitle ? "center" : "left"};
  font-weight: 400;
  padding-bottom:1rem;
   
  @media (max-width: ${breakpoints.screenSM}) {
    font-size:16px;
    line-height:26px;
  }
`

export { Typography, Headline, Title, Subtitle, Paragraph }
