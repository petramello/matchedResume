import React from 'react';

import Phone from "../../components/Phone/Phone";
import GoBack from "../../components/GoBack/GoBack";

import {MainContainer, MatchContainer} from "./styled";


const Match = () => {

  return (
    <MainContainer>
      <Phone isMatched={false} />
      <MatchContainer>
        <GoBack linkTo="/" />
      </MatchContainer>
    </MainContainer>

  )
}

export default Match;