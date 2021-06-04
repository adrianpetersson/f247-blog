import React from 'react'
import styled from "styled-components"
import { Headline,Paragraph } from '../styles/Typography'

const HeadlineWrapper = styled.div`
padding:2rem 0rem;
display:flex;
align-items:center;
flex-direction:column;
max-width:700px;`

const Headings = ({data}) => {
    return (
        <HeadlineWrapper>
         <Headline>{data.headline}</Headline> 
         <Paragraph asTitle={true}>{data.title}</Paragraph>  
        </HeadlineWrapper>
    )
}

export default Headings
