import React from 'react'

import logo from '../../assets/brand/logoPetraBranco.jpeg'
import {LogoContainer, LogoImg} from "./styled";


const Logo = () => {
    return (
        <LogoContainer to="/" >
         <LogoImg src={logo} alt="Imagem do logotipo da marca da arquiteta Mainara Avelino"/>
        </LogoContainer>
    )
}
export default Logo