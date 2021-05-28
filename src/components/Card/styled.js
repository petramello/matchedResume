import styled from "styled-components";

export const CardContainer = styled.a`
  display: inline;
  align-items: center;
  align-content: center;
  text-decoration: none;
  width: 100px;
  height: 100px;
  margin: 15px;
  transition: opacity .8ms ease-in;
  
  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    width: 100%;
    margin: 20px;
  }

  @media (min-width: 1824px) {
    width: 100%;
  }
  `

export const ImgCard = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 5px;

  &:hover {
    padding: 0;
    border: #541AA4 solid 5px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.95;
  }
 

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
  }

`

export const CardTitle = styled.p`
  font-family: Gudea, sans-serif;
  display: inline-block;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  color: #e661b2;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    width: 100%;
  }
`