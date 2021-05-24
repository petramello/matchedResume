import styled from "styled-components";

export const CardContainer = styled.a`
  display: inline-block;
  position: relative;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  text-decoration: none;
  width: 100px;
  height: 100px;
  `

export const ImgCard = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: opacity .8ms ease-in;

  &:hover {
    border: #541AA4 solid 10px;
    cursor: pointer;
    opacity: 0.95;
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
`