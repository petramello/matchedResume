import React from "react";

import {AvatarContainer, AvatarImg} from "./styled";


const Avatar = (props) => {

  return (
    <AvatarContainer>
      <AvatarImg src={props.photo} border={props.border}/>
    </AvatarContainer>
  )
}

export default Avatar;