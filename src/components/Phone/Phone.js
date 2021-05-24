import React from 'react';

import Itsmatched from "./ItsMatched/Itsmatched";
import ItsLooking from "./ItsLooking/ItsLooking";


import { MatchDiv } from "./styled";


const Phone = (props) => {

  const onChangeMatched = (isMatched) => {
    console.log("ism", isMatched);
    props.isMatched = isMatched;
  }

  return (
      <MatchDiv>
        { props.isMatched ?
          <Itsmatched />
          :
          <ItsLooking
            isMatched={props.isMatched}
            setMatched={isMatched => onChangeMatched(isMatched) } />
        }
      </MatchDiv>
  )
}

export default Phone;