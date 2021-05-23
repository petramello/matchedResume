import React from 'react';

import {HomeContainer,
  OpportunityContainer,
  OpportunityImg,
  SearchContainer,
  MidleText,
  SquareButton} from "./styled";

import opportunity from '../../assets/possibleOportunity.png'

const Home = () => {

  return (
    <HomeContainer>
      <OpportunityContainer>
        <OpportunityImg src={opportunity} />
      </OpportunityContainer>
      <SearchContainer>
        <MidleText>Encontre Seu Match Profissional </MidleText>
        <SquareButton>Buscar</SquareButton>
      </SearchContainer>
    </HomeContainer>
  )
}

export default Home;