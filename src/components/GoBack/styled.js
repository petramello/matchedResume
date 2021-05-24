import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const ArrowBackContainer = styled(NavLink)`
  display: inline-block;
  position: fixed;
  font-size: ${props => (props.arrowFontSize || "3rem")};
  bottom: ${props => (props.arrowBottom || "1.5rem")};
  left: ${props => (props.arrowMargLeft || "15rem")};
  z-index: 1000;
  color: ${props => (props.arrowColor || "#F2BBC7")};
  text-decoration: none;
  
  &: hover {
    color: #541AA4;
  }
`

export const ArrowText= styled.p`
  display: flex;
  font-size: 0.8rem;
  bottom: 1.5rem;
  left: 15rem;
  z-index: 1000;
  text-decoration: none;

  &: hover {
    color: #541AA4;
  }
`

