import React, {useState} from 'react';

import Avatar from "../../components/Avatar/Avatar";
import { FaHeart } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import avatarCompany from "../../assets/possibleAvatarII.jpeg";
import avatarMatched from "../../assets/matchProfile.jpg";

import {
  MatchTitle,
  AvatarContainer,
  MatchSubTitle,
  MatchDiv,
  PictureDiv,
  MatchPhoto,
  CVLink, ChoiceContainer, Choice, Options
} from "./styled";

const Phone = () => {

  const [isMatched, setIsMatched] = useState(false)

  return (
      <MatchDiv>
        { isMatched ? null :
          (<>
            <MatchSubTitle>tinder job</MatchSubTitle>
            <PictureDiv>
              <MatchPhoto src={avatarMatched} />
            </PictureDiv>
          </>)
        }

        { isMatched ?
          (<>
            <MatchTitle>It's a match!</MatchTitle>
            <MatchSubTitle>You and Petra Mello liked each other.</MatchSubTitle>
          </>)
        : null}

            <AvatarContainer>
              { isMatched ?
                (<>
                  <Avatar photo={avatarCompany} />
                  <Avatar photo={avatarMatched} border="double #e661b2 6px" />
                </>)
              :
                (<ChoiceContainer>
                  <Options></Options>
                  <Choice color="#F4686F"><ImCross /></Choice>
                  <Choice onClick={() => setIsMatched(true)}><FaHeart /></Choice>
                  <Options></Options>
                </ChoiceContainer>)}
            </AvatarContainer>

          { isMatched ?
            (<CVLink to="/resume">Resume</CVLink>)
          : null}


      </MatchDiv>
  )
}

export default Phone;