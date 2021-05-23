import styled from 'styled-components';
import {MidleText} from "../../containers/Home/styled";
import {NavLink} from "react-router-dom";


export const MatchDiv = styled.div`
  font-family: Lobster, sans-serif;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 10px auto ;
  padding: 0;
  color: #e661b2;
  width: 400px;
  height: 750px;
  border-radius: 5%;
  opacity: 95%;
  display: inline-table;
  border: 2px solid #7c7c7c;
  background-color: #3C393A;
`

export const PictureDiv = styled.div`
  margin-top: 60px;
  margin-bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 380px;
`
export const MatchPhoto = styled.img`
  width: 405px;
  height: fit-content;
  margin: 20px 0 0 0;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
`

export const ChoiceContainer = styled.div`
  width: 380px;
  height: 90%;
  display: inline-flex;
  justify-content: space-between;
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

export const MatchTitle = styled(MidleText)`
  font-family: Lobster, sans-serif;
  font-size: 4rem;
  margin-bottom: 0;
  letter-spacing: 0;
`

export const MatchSubTitle = styled(MidleText)`
  font-size: 1.1rem;
  margin-bottom: 20px;
  letter-spacing: 0.1rem;
`

export const AvatarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 300px;
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