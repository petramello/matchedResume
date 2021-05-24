import React from 'react';

import Phone from "../../components/Phone/Phone";
import GoBack from "../../components/GoBack/GoBack";

import {MatchContainer} from "./styled";


const Match = () => {
  return (
      <MatchContainer>
        <Phone isMatched={false} />
        <GoBack link="/"/>
      </MatchContainer>
  )
}

export default Match;