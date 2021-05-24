import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const ArrowBackContainer = styled(NavLink)`
  display: flex;
  position: fixed;
  font-size: 3rem;
  bottom: 1.5rem;
  left: 15rem;
  z-index: 1000;
  color: ${props => (props.arrowColor || "#F2BBC7")};
  
  &: hover {
    color: #541AA4;
  }
`
