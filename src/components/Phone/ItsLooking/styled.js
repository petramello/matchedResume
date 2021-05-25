import styled from "styled-components";
import {MatchSubTitle} from "../ItsMatched/styled";


export const IsLookingTitleDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: ${props => (props.heightTitleDiv || "7rem")};

  @media (max-width: 480px), handheld and (orientation: landscape) {
    height: ${props => (props.heightTitleDiv || "5rem")};
  }
`

export const IsLookingSubtitle = styled.p`
  font-family: Gueda, sans-serif;
  font-size: 1.7rem;
  letter-spacing: 0.2rem;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }
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
  padding: 10px 0 5px 5px;

  @media (max-width: 370px), handheld and (orientation: landscape) {
    width: 90%;
    height: 315px;
    padding: 5px 0;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 100%;
    height: 315px;
  }
`

export const TinderProfileText = styled(MatchSubTitle)`
  color: black;
  letter-spacing: 0;

  @media (max-width: 370px), handheld and (orientation: landscape) {
    font-size: 1rem;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size: 1.05rem;
  }
`
export const ChoiceContainer = styled.div`
  position: relative;
  width: 360px;
  display: inline-flex;
  justify-content: space-between;
  margin-top: 18px;


  @media (max-width: 370px), handheld and (orientation: landscape) {
    width: 250px;
    margin-top: 6px;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 310px;
    margin-top: 10px;
  }
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
    cursor: pointer;
  }

  @media (max-width: 370px), handheld and (orientation: landscape) {
    width: 22rem;
    height: 3rem;
    font-size: 1.8rem;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 20rem;
    height: 6rem;
    font-size: 1.8rem;
  }
`
export const Options = styled(Choice)`
  background-color: white;
  color: #e661b2;
  font-size: 2rem;
  width: 30rem;
  height: 4rem;
  margin: 0;

  &:hover {
    background-color: white;
    cursor: default ;
  }

  @media (max-width: 370px), handheld and (orientation: landscape) {
    font-size: 1rem;
    width: 15rem;
    height: 2.8rem;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size: 1rem;
    width: 10rem;
    height: 2.8rem;
  }
`
export const DenySpan = styled.div`
  margin-top: 10px;
  padding: 5px;
  font-style: normal;
  font-family: Gudea, sans-serif;
  color: white;
  background-color: #541AA4;

  @media (max-width: 370px), handheld and (orientation: landscape) {
    font-size: 0.9rem;
    margin-top: -5px;
    padding: 0;
    margin-bottom: 10px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size: 0.9rem;
    margin-top: 15px;
    padding: 10px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  
  `