import React from 'react';
import { PDFViewer, Document, Page } from 'react-pdf';

import Phone from "../../components/Phone/Phone";
import Card from "../../components/Card/Card";
import codeLikeAPossibleGirl from "../../assets/codeLikeAPossibleGirl.png";
import droneDaMontanha from "../../assets/droneDaMontanha.png";
import counterApp from "../../assets/counterApp.png";
import infoCovid from "../../assets/infoCovid.png";
import churrascaria from "../../assets/churrascaria.png";
import cvPDF from '../../assets/cv_PetraMello.pdf';

import IconSocialMedia from "../../components/NavigationItens/IconSocialMidia";

import { ResumeContainer,
  PhoneContainer,
  ResumeDiv,
  PortfolioDiv,
  IconDiv } from "./styled";
import { MatchTitle } from "../../components/Phone/ItsMatched/styled";

const Resume = () => {

  return (
    <>
      <ResumeContainer>
        <PhoneContainer>
          <Phone isMatched={true} />
        </PhoneContainer>

        <ResumeDiv>
          <MatchTitle sizeTitle= "2rem">Quem sou eu?</MatchTitle>
          <p>Em transição de carreira, na minha área profissional anterior - ciências biológicas, atuei desenvolvendo
            mestrado, doutorado e chegando a cargo de assessoria e coordenadoria. No final de 2019, quando resolvi
            transitar de carreira, foquei nos estudos em desenvolvimento de software, especialmente em Desenvolvimento
            Front-end.
          </p>

          <p>Possuo conhecimento em JavaScript, HTML, HTML5, CSS, CSS3, Styled-components, Web Design Responsivo, Sass
            e Compass, Flexbox, jQuery e React. Além de estudar C, C++ e algoritmos, a fim de compreender melhor os
            conceitos básicos da computação e lógica de programação.
          </p>

          <p>Também possuo: vivência internacional; conhecimento em CRM; habilidade em análises de dados e estatística;
            experiência em gerenciamento de projeto; inteligência estratégica; competência para liderar pessoas e
            administrar conflitos; sólido histórico em contribuição ativa em discussões e compartilhamento de
            conhecimento com toda a equipe e empresa; comunicação oral e escrita; além de ser habituada a desenvolver
            projetos do zero.
          </p>

          <p>Atualmente, desenvolvo projetos web propostos em cursos e em comunidades, ou, iniciativas pessoais como o
            www.dronedamontanha.com, que está em meus destaques. Sempre buscando aprimorar o conhecimento e trazer
            novos insights. Me encontrei no desenvolvimento de software. Adoro programar, resolver problemas e
            desenvolver projetos. Sou uma profissional dedicada, curiosa, responsável, criativa, proativa e colaborativa.
          </p>

          <p>Tenho como missão compreender as regras de negócio do projeto em curso a fim de criar ideias e soluções
            para a produção de uma interface, site ou aplicativo funcional e atraente ao cliente e usuário,
            considerando as boas práticas e otimização do código. E, como objetivo profissional, aspiro atuar
            como Desenvolvedor (a) Front-end no mercado de trabalho.
          </p>
          <IconDiv>
            <IconSocialMedia typeIcon="linkedin" />
            <IconSocialMedia typeIcon="github" />
          </IconDiv>

        </ResumeDiv>
      </ResumeContainer>

      <PortfolioDiv>
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
          linkhref="www.dronedamontanha.com"
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
    </>
  )
}
export default Resume;
