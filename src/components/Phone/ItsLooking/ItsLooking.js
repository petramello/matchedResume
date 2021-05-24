import React, {useState} from 'react';

import {ImCross} from "react-icons/im";
import {FaHeart} from "react-icons/fa";
import {FcIdea} from "react-icons/fc";
import {FcMindMap} from "react-icons/fc";
import {FcReading} from "react-icons/fc";
import {FcDataSheet} from "react-icons/fc";
import {FcConferenceCall} from "react-icons/fc";
import {FcCollaboration} from "react-icons/fc";
import {FcBullish} from "react-icons/fc";
import {FcApproval} from "react-icons/fc";
import {BiError} from "react-icons/bi";

import {
  IsLookingTitleDiv,
  IsLookingSubtitle,
  TinderProfile,
  TinderProfileText,
  ChoiceContainer,
  Options,
  Choice,
  DenySpan} from "./styled";


const ItsLooking = (props) => {

  const [isDenid, setIsDenid] = useState(false)

  const onHandleDeny = () => {
    if (isDenid === false) {
      setIsDenid(true)
    }
    return isDenid
  }

  return (
    <>
      <IsLookingTitleDiv>
        <IsLookingSubtitle>tinder job</IsLookingSubtitle>
      </IsLookingTitleDiv>

      <TinderProfile>
        <TinderProfileText><FcMindMap /> Proativa </TinderProfileText>
        <TinderProfileText><FcConferenceCall /> Colaborativa</TinderProfileText>
        <TinderProfileText><FcCollaboration /> Boa comunicação oral e escrita</TinderProfileText>
        <TinderProfileText><FcDataSheet /> Raciocínio lógico</TinderProfileText>
        <TinderProfileText><FcIdea /> Boa em resolução de problemas</TinderProfileText>
        <TinderProfileText><FcReading /> Git, HTML5, CSS3, JS, React</TinderProfileText>
        <TinderProfileText><FcApproval /> Inglês instermediário-avançado</TinderProfileText>
        <TinderProfileText><FcBullish /> Vontade de aprender e evoluir</TinderProfileText>
      </TinderProfile>

      <ChoiceContainer>
        <Options></Options>

        {isDenid ?
          <Choice color="#C7C7C7">
            <ImCross onClick={onHandleDeny}/>
          </Choice>
          :
          <Choice color="#F4686F">
            <ImCross onClick={onHandleDeny}/>
          </Choice>
        }

        <Choice onClick={props.handleClick}>
          <FaHeart />
        </Choice>
        <Options></Options>
      </ChoiceContainer>

      {isDenid ?
        <DenySpan><BiError /> Desculpe! Não vou deixar você perder essa profissional! "Give a match" e vai se apaixonar!</DenySpan>
        :
        null
      }

    </>
  )
}

export default ItsLooking;
