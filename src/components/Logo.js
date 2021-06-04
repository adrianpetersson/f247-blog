import React from 'react'
import breakpoints from "../constants/breakpoints"
import styled from "styled-components"
import data from "../data/content"

const Logo = () => {
    return (
        
        <a target="_blank" rel="noopener noreferrer" href={"https://se.fitness24seven.com/"}>
         <LogoImg src={data.global.logo.logo} alt={data.global.logo.alt} />   
        </a>
       
    )
}
const LogoImg = styled.img`
max-width:150px;
opacity:0.6;

@media (max-width: ${breakpoints.screenMD}) {
    max-width:70px;
  }
  
  @media (max-width: ${breakpoints.screenSM}) {
    max-width:40px;
  }`

export default Logo
