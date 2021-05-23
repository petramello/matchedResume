import React from 'react';


import { ResumeContainer, PhoneContainer, ResumeDiv } from "./styled";
import Phone from "../../components/Phone/Phone";


const Resume = () => {
  return (
    <ResumeContainer>
      <PhoneContainer>
        <Phone />
      </PhoneContainer>
      <ResumeDiv>Profile</ResumeDiv>
    </ResumeContainer>
  )
}
export default Resume;