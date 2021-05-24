import React from "react";

// import {TiArrowBack} from "react-icons/ti";
import {IoArrowBackCircleSharp} from "react-icons/io5";

import {ArrowBackContainer, ArrowText} from "./styled";


const GoBack = (props) => {
  return (
  <ArrowBackContainer
    to={props.linkTo}
    arrowBottom ={props.arrowBottom}
    arrowMargLeft={props.arrowMargLeft}
    arrowFontSize={props.arrowFontSize}
  >
    <IoArrowBackCircleSharp />
    <ArrowText>Volte ao início</ArrowText>
  </ArrowBackContainer>
  )
}
export default GoBack;