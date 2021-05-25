import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const TitleDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  justify-content: center;
  height: ${props => (props.heightTitleDiv || "10rem")};
  
  @media (max-width: 370px), handheld and (orientation: landscape) {
    width: 90%;
  }
`

export const MatchTitle = styled.p`
  font-family: Lobster, sans-serif;
  font-size: ${props => (props.sizeTitle || "4rem")};
  margin-bottom: 0;
  letter-spacing: 0;

  @media (max-width: 370px), handheld and (orientation: landscape) {
    font-size: 3rem;
  }
`

export const MatchSubTitle = styled.p`
  font-family: Gueda, sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;

  @media (max-width: 370px), handheld and (orientation: landscape) {
    font-size: 1rem;
  }
`

export const CVLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-top: 40px;
  padding: 1.3rem;
  color: #e661b2;
  border-radius: 8%;
  border: solid #e661b2 2px;
  font-size: 1.2rem;
  font-family: Gudea, sans-serif;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
  
  &:hover {
    font-weight: bolder;
    background-color: #541AA4;
    color: white;
    border: none;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 280px;
    font-size: 1rem;
  }
`

export const CVNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-top: 40px;
  padding: 1.3rem;
  color: #e661b2;
  border-radius: 8%;
  border: solid #e661b2 2px;
  font-size: 1.2rem;
  font-family: Gudea, sans-serif;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;

  &:hover {
    font-weight: bolder;
    background-color: #541AA4;
    color: white;
    border: none;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: 280px;
    font-size: 1rem;
  }
`

export const DownloadLink = styled.a`
  margin-left: 30px;
  font-size: 1.5rem;
  color: #e661b2;
  `
