import styled from 'styled-components';
import {MatchDiv} from "../../components/Phone/styled";
import {ArrowBackContainer, ArrowText} from "../../components/GoBack/styled";
import {MatchTitle} from "../../components/Phone/ItsMatched/styled";
import {ReadMoreContainer, ReadMoreText} from "../../components/ReadMore/styled";

export const ResumeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgb(230,97,178);
  background: linear-gradient(90deg, rgba(230,97,178,1) 4%, rgba(134,56,118,1) 36%, rgba(73,30,80,1) 100%);
  overflow: hidden;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    width: 100%;
    height: 100%;

    ${MatchDiv} {
      left: 0;
      margin-top: 20px;
      position: relative;
    }
    
    ${ArrowBackContainer} {
      bottom: 14rem;
      left: 0.5rem;
      font-size: 0.8rem;
    }

    ${ArrowText} {
      display: inline;
      font-size: 0.7rem;
      
    }
  }
`

export const PhoneContainer = styled.div`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100vh;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 30%;

      ${ArrowBackContainer} {
          margin: 100px 0 -5rem 10px;
      }
  }

 
`

export const ResumeDiv = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 60%;
  text-align: justify;
  color: white;
  margin-top: 100px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
  }
`

export const ResumeTextDiv = styled.div`
  height: 300px;
  width: 90%;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    
    ${MatchTitle} {
      text-align: center;
      margin: -10px 0 0 10px;
      font-size: 2rem;
    }
    
    ${ReadMoreContainer} {
      display: inline-block;
      text-align: center;
      width: 90%;
      margin-left: 30px;
    }
    
    ${ReadMoreText} {
      display: inline-block;
      position: relative;
      width: 90%;
      margin-left: 30px;
    }
  }
`

export const IconDiv = styled.div`
  font-size: 1.8rem;
  position: relative;
  display: inline-flex;
  text-align: right;
  height: 50px;
  z-index: 999;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    position: relative;
    width: 100%;
  }
`

export const PortfolioDiv = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 90%;
  margin-top: -150px;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    display: inline-block;
    margin-top: 0;
    width: 90%;
    text-align: center;
  }
`


export const PortfolioTitle = styled.p`
  font-family: Lobster, sans-serif;
  font-size: 1.5rem;
  width: 100%;

`

