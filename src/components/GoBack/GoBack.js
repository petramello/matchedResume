import React from "react";

import {TiArrowBack} from "react-icons/ti";

import {ArrowBackContainer} from "./styled";


const GoBack = (props) => {
  return (
  <ArrowBackContainer to={props.link}>
    <TiArrowBack />
  </ArrowBackContainer>
  )
}
export default GoBack;