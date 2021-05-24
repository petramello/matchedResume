import React from 'react';

import Avatar from "../../Avatar/Avatar";
import avatarCompany from "../../../assets/possibleAvatarII.jpeg";
import avatarMatched from "../../../assets/matchProfile.jpg";

import {CVLink,
  MatchSubTitle,
  MatchTitle,
  TitleDiv} from "./styled";
import { AvatarContainer } from "../../Avatar/styled";


const Itsmatched = () => {

  return (
    <>
      <TitleDiv heightTitleDiv="10rem">
        <MatchTitle>It's a match!</MatchTitle>
        <MatchSubTitle>You and Petra Mello liked each other.</MatchSubTitle>
      </TitleDiv>

      <AvatarContainer>
        <Avatar photo={avatarCompany} />
        <Avatar photo={avatarMatched} />
      </AvatarContainer>

      <CVLink to="/resume">Resume</CVLink>

    </>
  )
}

export default Itsmatched;