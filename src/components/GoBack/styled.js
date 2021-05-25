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
  
  &:hover {
    color: #541AA4;
  }
  
  @media (max-width: 480px), handheld and (orientation: landscape) {
    bottom: 1rem;
    left: 5rem;
    font-size: 2rem;
  }

  @media (max-width: 980px), handheld and (orientation: landscape) { {
    bottom: 0.5rem;
    left: 4rem;
    font-size: 2rem;
  }

  @media (min-width: 1824px), handheld and (orientation: landscape) { {
    bottom: 1.5rem;
    left: 20rem;
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

