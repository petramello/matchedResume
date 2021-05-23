import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  overflow:hidden;
`

export const CardContent = styled.div`
  width: 210px;
  height: 210px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  
  
  &:hover {
    background-color: #541AA4;
    color: white;
    cursor: pointer;
  }
`

export const ImgCard = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 8px;
  border-radius: 50%;

`

export const ContentLink = styled.a`
  font-family: Gudea, sans-serif;
  display: inline-block;
  cursor: pointer;
  font-size: 1.2rem;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  color: #e661b2;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none !important;
    font-weight: bold;
    color: white;
`