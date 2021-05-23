import React from 'react';


import { ResumeContainer, PhoneContainer, ResumeDiv, PortfolioDiv } from "./styled";
import Phone from "../../components/Phone/Phone";


const Resume = () => {


  return (
    <ResumeContainer>
      <PhoneContainer>
        <Phone />
      </PhoneContainer>
      <ResumeDiv src="https://www.slideshare.net/slideshow/embed_code/key/hDoQmwnZxvclJR"
        width="479" height="511"
        frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"
        allowFullScreen>
      </ResumeDiv>
      {/*<PortfolioDiv>*/}
      {/*  /!*<CardLink />*!/*/}
      {/*  /!*<CardLink />*!/*/}
      {/*  /!*<CardLink />*!/*/}
      {/*  /!*<CardLink />*!/*/}
      {/*</PortfolioDiv>*/}
    </ResumeContainer>
  )
}
export default Resume;
