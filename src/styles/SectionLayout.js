import styled from 'styled-components'
import breakpoints from '../constants/breakpoints'

export const SectionWrapper = styled.section`
padding:2rem 12rem;
position:relative;
height:${props => props.height || "auto"};
display:flex;
width:100%;
flex-direction:column;
justify-content:space-between;
align-items:center;


@media (max-width: ${breakpoints.screenLG}) {
  padding: 1.5rem 8rem;
}

@media (max-width: ${breakpoints.screenMD}) {
  padding: 1rem 2rem;
}

@media (max-width: ${breakpoints.screenSM}) {
  padding: 0.5rem 1rem;
}
` 


export const Layout = styled.div`

 background-image: url(${props => props.img});
  background-size: cover;
  display: flex;
  align-items:${props => props.align || "baseline"};
  position:relative;
  flex-direction:column;
  top: 0;
  max-height:70vh;

  @media (max-width: ${breakpoints.screenMD}) {
    padding: 2rem 5rem;
    background-image: url(${props => props.imgSm })
  }

  @media (max-width: ${breakpoints.screenSM}) {
    padding: 1.5rem 2rem;
  }

  a {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.textPrimary};
  }
`
