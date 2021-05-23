import styled from "styled-components";

export const HeaderMenuContainer = styled.div`
  display: inline-flex;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 110px;
  background-color: black;
  color: #f8f8f8;
  opacity: 100%;
  top: -10px;
  font-family: Gudea, sans-serif;
  font-size: 1.1rem;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    font-size: 1rem;
  }
  
  @media (min-width: 1824px) {
    font-size: 1.4rem;
  }
`
