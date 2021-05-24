import styled from "styled-components";
import { MatchTitle} from "../ItsMatched/styled";
import {NavLink} from "react-router-dom";


export const TinderTitle = styled(MatchTitle)`
  font-family: Gueda, sans-serif;
  font-size: 1.3rem;
`
export const PhotoDiv = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 350px;
  top: -20px;
`
export const MatchPhoto = styled.img`
  height: 450px;
  width: 400px;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
`
export const ChoiceContainer = styled.div`
  position: relative;
  width: 380px;
  display: inline-flex;
  justify-content: space-between;
  margin-top: 20px;
`
export const Choice = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 7rem;
  text-align: center;
  border-radius: 50%;
  border: solid #7c7c7c 8px;
  background-color: white;
  color: ${props => (props.color || "#4BCC95")};
  padding: 0;
  font-size: 3rem;
`
export const Options = styled(Choice)`
  width: 30rem;
  height: 4rem;
  margin: 0;
`