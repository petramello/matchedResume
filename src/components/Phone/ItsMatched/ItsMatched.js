import React, {useState} from 'react';

import Avatar from "../../Avatar/Avatar";
import avatarCompany from "../../../assets/possibleAvatarII.jpeg";
import avatarMatched from "../../../assets/matchProfile.jpg";
import cvPetraMello from "../../../assets/cv_PetraMello.pdf";
import {BiDownload} from "react-icons/bi";

import {CVLink,
  MatchSubTitle,
  MatchTitle,
  TitleDiv,
  DownloadLink,
CVNavLink} from "./styled";
import { AvatarContainer } from "../../Avatar/styled";


const ItsMatched = (props) => {

  const [isAtResume, setIsAtResume] = useState(props.isAtResume);

  return (
    <>
      <TitleDiv heightTitleDiv="10rem">
        <MatchTitle>It's a match!</MatchTitle>
        <MatchSubTitle>Você e Petra Mello se combinam.</MatchSubTitle>
      </TitleDiv>

      <AvatarContainer>
        <Avatar photo={avatarCompany} />
        <Avatar photo={avatarMatched} />
      </AvatarContainer>

      {isAtResume ?

        (<CVLink href={cvPetraMello} download="PetraMello.pdf" >
          {props.children}
              <DownloadLink >
                <BiDownload />
              </DownloadLink>
          </CVLink>
        )
            :
        (<CVNavLink to="/resume">
          {props.children}
        </CVNavLink>
        )
      }
    </>
  )
}

export default ItsMatched;