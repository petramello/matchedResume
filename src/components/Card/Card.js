import React from 'react'
import {CardContainer, CardTitle, ImgCard} from "./styled";

const Card = (props) => {

  return (
    <CardContainer cardContentBack={props.cardContentBack} href={props.linkhref} target="_blank" rel="noopener noreferrer">
        <ImgCard src={props.imgCard} alt={props.altText} />
        <CardTitle>{props.cardTitle}</CardTitle>
    </CardContainer>
  )
}

export default Card