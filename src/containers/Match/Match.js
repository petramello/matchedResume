import React from 'react';

import Avatar from "../../components/Avatar/Avatar";

import {MatchContainer, MatchTitle} from "./styled";
import {SquareButton} from "../Home/styled";

const Match = () => {

  return (
    <MatchContainer>
      <MatchTitle>It's match!</MatchTitle>
      <div>
        <Avatar />
        <Avatar />
      </div>
      <SquareButton>Resume</SquareButton>
    </MatchContainer>
  )
}

export default Match;