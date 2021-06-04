import React from 'react'
import styled from "styled-components"
import data from "../data/content"
import Logo from "./Logo"
import LanguagePicker from "./LanguagePicker"
import breakpoints from '../constants/breakpoints'


const Footer = () => {

    return (
        <FooterWrapper>
            <Logo src={data.global.logo.logo} alt=""/>
            <SocialMediaWrapper>
       {data.socialMedia.map(icon =>  (
           <SocialMediaLink key={icon.sr} href={icon.link}><img src={icon.icon} alt={icon.sr} /></SocialMediaLink>
       ))}
       </SocialMediaWrapper>
    <LanguagePicker />
        </FooterWrapper>
    )
}
const FooterWrapper = styled.footer`
margin-top:4rem;
background-color:#002a4e;
display:flex;
align-items:center;
justify-content:space-between;
padding:4rem;
@media (max-width: ${breakpoints.screenSM}) {
   flex-direction:column;
      }
    `

const SocialMediaWrapper=styled.div`

@media (max-width: ${breakpoints.screenSM}) {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    padding:2rem 0rem;
       }
`

const SocialMediaLink = styled.a`
fill:white;
padding:1rem;
`

export default Footer
