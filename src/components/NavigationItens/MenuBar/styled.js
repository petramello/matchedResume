import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const MenuList = styled.ol`
    display: inline-flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 14rem;
    list-style-type: none;
    z-index: 9999;
    width: 60%;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    margin-left: 0rem;
    
  }
`

export const MenuLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    color: #f8f8f8;
    margin:0 15px 8px 15px;
  
  &:hover,
  &:active,
  &:focus {
    color: #f8f8f8;
    border-bottom: 2px solid #f8f8f8;
    text-decoration: none !important;
    font-weight: bold;
  }
  
`
