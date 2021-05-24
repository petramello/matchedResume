import React from 'react';

import avatarMatched from "../../../assets/matchProfile.jpg";
import {ImCross} from "react-icons/im";
import {FaHeart} from "react-icons/fa";

import { TitleDiv } from "../ItsMatched/styled";
import { TinderTitle,
  PhotoDiv,
  MatchPhoto,
  ChoiceContainer,
  Options,
  Choice } from "./styled";
import { AvatarContainer } from "../../Avatar/styled";


const ItsLooking = (props) => {

  const setIsMatched =() => {
    const isMatched = true;
    return isMatched
  };

  return (
    <>
      <TitleDiv>
        <TinderTitle>tinder job</TinderTitle>
      </TitleDiv>

      <AvatarContainer>
        <PhotoDiv>
          <MatchPhoto src={avatarMatched} />
        </PhotoDiv>
      </AvatarContainer>

      <ChoiceContainer>
        <Options></Options>
        <Choice color="#F4686F">
          <ImCross />
        </Choice>
        <Choice onClick={setIsMatched}>
          <FaHeart />
        </Choice>
        <Options></Options>
      </ChoiceContainer>
    </>
  )
}

export default ItsLooking;
