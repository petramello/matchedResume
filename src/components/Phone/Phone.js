import React, {useState} from 'react';

import ItsLooking from "./ItsLooking/ItsLooking";
import ItsMatched from "./ItsMatched/ItsMatched";

import { MatchDiv } from "./styled";


const Phone = (props) => {

  const [isMatched, setIsMatched] = useState(
    props.isMatched,
    props.resumeChildren
  )

  const onHandleClick = () => {
    if (props.isMatched === false) {
      setIsMatched(true)
    }
  }

  return (

  <>
    <MatchDiv>
      { isMatched ?
        <ItsMatched isAtResume={props.isAtResume} >{props.resumeChildren}</ItsMatched>
        :
        <ItsLooking handleClick={() => onHandleClick(props.isMatched)} />
      }
    </MatchDiv>
  </>
  )
}

export default Phone;