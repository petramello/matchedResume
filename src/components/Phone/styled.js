import styled from 'styled-components';
import {MidleText} from "../../containers/Home/styled";
import {NavLink} from "react-router-dom";

export const MatchDiv = styled.div`
  font-family: Lobster, sans-serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  color: #e661b2;
  width: 400px;
  height: 700px;
  border-radius: 5%;
  opacity: 95%;
  display: inline-table;
  border: 2px solid #7c7c7c;
  background-color: #3C393A;
`

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
  font-size: 4rem;
  margin-bottom: 0;
  letter-spacing: 0;
`

export const MatchSubTitle = styled(MatchTitle)`
  font-family: Gueda, sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
`

export const TinderTitle = styled(MatchTitle)`
  font-family: Gueda, sans-serif;
  font-size: 1.3rem;
`

export const AvatarContainer = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 300px;
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
  height: 7.5rem;
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