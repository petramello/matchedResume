import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const LogoContainer = styled(NavLink)`
  height: 110px;
`

export const LogoImg = styled.img`
  margin-left: 60px;
  margin-right: 80px;
  position: relative;
  height: 100%;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    margin: 0;
  }
  
  
`