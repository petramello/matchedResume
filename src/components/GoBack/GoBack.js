import React from "react";

// import {TiArrowBack} from "react-icons/ti";
import {IoArrowBackCircleSharp} from "react-icons/io5";

import {ArrowBackContainer} from "./styled";


const GoBack = (props) => {
  return (
  <ArrowBackContainer to={props.linkTo}>
    <IoArrowBackCircleSharp />
  </ArrowBackContainer>
  )
}
export default GoBack;