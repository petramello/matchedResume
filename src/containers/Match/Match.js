import React from 'react';

import Avatar from "../../components/Avatar/Avatar";
import avatarCompany from "../../assets/possibleAvatarII.jpeg";
import avatarMatched from "../../assets/matchProfile.jpg";

import {MatchContainer,
  MatchTitle,
  AvatarContainer,
  MatchSubTitle,
  MatchDiv,
  CVLink} from "./styled";

const Match = () => {

  return (
    <MatchContainer>
      <MatchDiv>
        <MatchTitle>It's a match!</MatchTitle>
        <MatchSubTitle>You and Petra Mello liked each other.</MatchSubTitle>
        <AvatarContainer>
          <Avatar photo={avatarCompany} />
          <Avatar photo={avatarMatched} border="double #e661b2 6px" />
        </AvatarContainer>
        <CVLink to="/profile">Resume</CVLink>
      </MatchDiv>
    </MatchContainer>
  )
}

export default Match;