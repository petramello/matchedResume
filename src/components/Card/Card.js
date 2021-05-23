import React from 'react'
import {CardContent, CardContainer, ContentLink, ImgCard} from "./styled";

const Card = (props) => {

  return (
    <CardContainer>
      <CardContent cardContentBack={props.cardContentBack}>
        <ImgCard src={props.imgCard} alt={props.altText} />
        <ContentLink  href={props.linkhref} >{props.cardTitle}</ContentLink>
      </CardContent>
    </CardContainer>
  )
}

export default Card