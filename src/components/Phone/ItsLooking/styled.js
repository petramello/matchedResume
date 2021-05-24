import styled from "styled-components";
import {MatchSubTitle, MatchTitle} from "../ItsMatched/styled";
import {NavLink} from "react-router-dom";

export const IsLookingTitleDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: ${props => (props.heightTitleDiv || "7rem")};
`

export const IsLookingSubtitle = styled.p`
  font-family: Gueda, sans-serif;
  font-size: 1.7rem;
  letter-spacing: 0.2rem;
`

export const TinderProfile = styled.div`
  width: 350px;
  height: 350px;
  display: inline-block;
  position: relative;
  background-color: white;
  background-size: cover;
  text-align: center;
  z-index: 1000;
  padding: 10px 15px;
`

export const TinderProfileText = styled(MatchSubTitle)`
  color: black;
  letter-spacing: 0;
`
export const ChoiceContainer = styled.div`
  position: relative;
  width: 360px;
  display: inline-flex;
  justify-content: space-between;
  margin-top: 18px;
`
export const Choice = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 7rem;
  text-align: center;
  border-radius: 50%;
  border: solid #7c7c7c 3px;
  background-color: white;
  color: ${props => (props.color || "#4BCC95")};
  padding: 0;
  font-size: 3rem;
  
  &:hover {
    background-color: #541AA4;
  }
`
export const Options = styled(Choice)`
  width: 30rem;
  height: 4rem;
  margin: 0;
`
export const DenySpan = styled.div`
  margin-top: 10px;
  padding: 5px;
  font-style: normal;
  font-family: Gudea, sans-serif;
  color: white;
  background-color: #541AA4;
  `