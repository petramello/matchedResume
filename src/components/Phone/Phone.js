import React, {useState} from 'react';

import ItsLooking from "./ItsLooking/ItsLooking";
import Itsmatched from "./ItsMatched/Itsmatched";

import { MatchDiv } from "./styled";
import GoBack from "../GoBack/GoBack";
import {MatchContainer} from "../../containers/Match/styled";


const Phone = (props) => {

  const [isMatched, setIsMatched] = useState(false)

  const onHandleClick = () => {
    if (isMatched === false) {
      setIsMatched(true)
    }
  }

  return (

  <>
    <MatchDiv>
      { isMatched ?
        <Itsmatched />
        :
        <ItsLooking handleClick={() => onHandleClick(isMatched)} />
      }
    </MatchDiv>

    {/*<MatchContainer>*/}
    {/*  { isMatched ?*/}
    {/*    <GoBack linkTo="/match" />*/}
    {/*    :*/}
    {/*    <GoBack linkTo="/" />*/}
    {/*  }*/}
    {/*</MatchContainer>*/}
  </>
  )
}

export default Phone;