import React from 'react';

import Phone from "../../components/Phone/Phone";
import Card from "../../components/Card/Card";
import codeLikeAPossibleGirl from "../../assets/codeLikeAPossibleGirl.png";
import droneDaMontanha from "../../assets/droneDaMontanha.png";
import counterApp from "../../assets/counterApp.png";
import infoCovid from "../../assets/infoCovid.png";
import churrascaria from "../../assets/churrascaria.png";

import IconSocialMedia from "../../components/NavigationItens/IconSocialMidia";

import {
  ResumeContainer,
  PhoneContainer,
  ResumeDiv,
  ResumeTextDiv,
  PortfolioDiv,
  IconDiv,
  PortfolioTitle
} from "./styled";
import { MatchTitle } from "../../components/Phone/ItsMatched/styled";
import ResumeContent from "../../components/ReadMore/ReadMore";
import {MatchContainer} from "../Match/styled";
import GoBack from "../../components/GoBack/GoBack";

const Resume = () => {

  return (
      <ResumeContainer>
        <PhoneContainer>
          <MatchContainer />
          <Phone isMatched={true} resumeChildren="Currículo completo" isAtResume={true}/>
          <GoBack   linkTo="/" arrowBottom= "0rem" arrowMargLeft="1rem" arrowFontSize="2rem"/>
        </PhoneContainer>

        <ResumeDiv>
          <ResumeTextDiv>
            <MatchTitle sizeTitle= "2rem">Quem sou eu?</MatchTitle>
            <ResumeContent />
            <IconDiv>
              <IconSocialMedia typeIcon="linkedin" />
              <IconSocialMedia typeIcon="github" />
            </IconDiv>
          </ResumeTextDiv>

          <PortfolioDiv>
            <PortfolioTitle sizeTitle= "1rem">Projetos:</PortfolioTitle>
            <Card
              imgCard={codeLikeAPossibleGirl}
              altText="Link que redireciona para o site https://codelikeapossiblegirl-petra.web.app/"
              cardContentBack="#DB6C79"
              linkhref="https://codelikeapossiblegirl-petra.web.app/"
              cardTitle="Site: Linha do Tempo e SWOT"
            />

            <Card
              imgCard={droneDaMontanha}
              altText="Link que redireciona para o site www.dronedamontanha.com"
              cardContentBack="#0a47ed"
              linkhref="https://dronedamontanha.com/"
              cardTitle="Site: Drone da Montanha"
            />

            <Card
              imgCard={counterApp}
              altText="Link que redireciona para o site https://counterapp-4318d.web.app/"
              cardContentBack="#F8E330"
              linkhref="https://counterapp-4318d.web.app/"
              cardTitle="App: Contador"
            />

            <Card
              imgCard={infoCovid}
              altText="Link que redireciona para o site https://infocovid.petramello.repl.co/"
              cardContentBack="#7AD3D0"
              linkhref="https://infocovid.petramello.repl.co/"
              cardTitle="Site: Informações sobre Covid-19"
            />

            <Card
              imgCard={churrascaria}
              altText="Link que redireciona para o site https://churrascaria.petramello.repl.co/"
              cardContentBack="#F3750C"
              linkhref="https://churrascaria.petramello.repl.co/"
              cardTitle="Site de Rodízio"
            />
          </PortfolioDiv>
        </ResumeDiv>
      </ResumeContainer>
  )
}
export default Resume;
