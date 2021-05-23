import React from 'react';

import {HomeContainer,
  OpportunityContainer,
  OpportunityImg,
  SearchContainer,
  MidleText,
  SquareLink} from "./styled";

import opportunity from '../../assets/possibleOportunity.png'

const Home = () => {

  return (
    <HomeContainer>
      <OpportunityContainer>
        <OpportunityImg src={opportunity} />
      </OpportunityContainer>
      <SearchContainer>
        <MidleText>Encontre Seu Match Profissional </MidleText>
        <SquareLink to="/match">Buscar</SquareLink>
      </SearchContainer>
    </HomeContainer>
  )
}

export default Home;