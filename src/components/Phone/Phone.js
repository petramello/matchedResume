import React, {useState} from 'react';

import Avatar from "../../components/Avatar/Avatar";
import { FaHeart } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import avatarCompany from "../../assets/possibleAvatarII.jpeg";
import avatarMatched from "../../assets/matchProfile.jpg";

import {
  MatchTitle,
  AvatarContainer,
  TitleDiv,
  MatchSubTitle,
  TinderTitle,
  MatchDiv,
  PhotoDiv,
  MatchPhoto,
  CVLink, ChoiceContainer, Choice, Options
} from "./styled";

const Phone = (props) => {

  const [isMatched, setIsMatched] = useState(false);

  return (
      <MatchDiv>

        { isMatched ?
          (<TitleDiv heightTitleDiv="10rem">
            <MatchTitle>It's a match!</MatchTitle>
            <MatchSubTitle>You and Petra Mello liked each other.</MatchSubTitle>
          </TitleDiv>)
        :
          (<TitleDiv>
            <TinderTitle>tinder job</TinderTitle>
          </TitleDiv>)
        }

          <AvatarContainer>
            { isMatched ?
              (<>
                <Avatar photo={avatarCompany} />
                <Avatar photo={avatarMatched} border="double #e661b2 6px" />
              </>)
              :
              <PhotoDiv>
                <MatchPhoto src={avatarMatched} />
              </PhotoDiv>
            }
          </AvatarContainer>

        { isMatched ?
            <CVLink to="/resume">Resume</CVLink>
          :
            (<ChoiceContainer>
                <Options></Options>
                <Choice color="#F4686F">
                  <ImCross />
                </Choice>
                <Choice onClick={() => setIsMatched(true)}>
                  <FaHeart />
                </Choice>
                <Options></Options>
            </ChoiceContainer>)
          }

      </MatchDiv>
  )
}

export default Phone;