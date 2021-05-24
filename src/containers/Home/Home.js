import React from 'react';

import {Container,
  OpportunityContainer,
  OpportunityImg,
  SearchContainer,
  TitleHome,
  SquareLink} from "./styled";

import opportunity from '../../assets/possibleOportunity.png'

const Home = () => {

  return (
    <Container>
      <OpportunityContainer>
        <OpportunityImg src={opportunity} />
      </OpportunityContainer>
      <SearchContainer>
        <TitleHome>Encontre Seu Match Profissional</TitleHome>
        <SquareLink to="/match">Encontrar</SquareLink>
      </SearchContainer>
    </Container>
  )
}

export default Home;