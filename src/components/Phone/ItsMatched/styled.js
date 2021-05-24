import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const TitleDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  justify-content: center;
  height: ${props => (props.heightTitleDiv || "10rem")};
`
export const MatchTitle = styled.p`
  font-family: Lobster, sans-serif;
  font-size: ${props => (props.sizeTitle || "4rem")};
  margin-bottom: 0;
  letter-spacing: 0;
`

export const MatchSubTitle = styled(MatchTitle)`
  font-family: Gueda, sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
`

export const CVLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-top: 50px;
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
`