import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #e661b2;
`

export const OpportunityContainer = styled.div`
  align-items: center;
  padding: 0;
  width: 50%;
  height: 100%;
  margin: 0;
  //background-color: #0839be;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,63,193,1) 0%, rgba(8,57,190,1) 45%, rgba(0,212,255,1) 100%);
  clip-path: polygon(90% 0, 100% 100%, 0 100%, 0 0);
`

export const OpportunityImg = styled.img`
  width: 75%;
  margin: 50px;
  align-items: center;
  padding: 0;
  float: left;
`

export const SearchContainer= styled.div`
  display: table-column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 50%;
  height: 100%;
  font-family: Gudea, sans-serif;
`

export const MidleText= styled.p`
  font-family: Gudea, sans-serif;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
  letter-spacing: 0.2rem;
`

export const SquareLink= styled(NavLink)`
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 1.5rem;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #0a47ed;
  opacity: 70%;
  letter-spacing: 0.2rem;
  text-decoration: none;
  font-family: Gudea, sans-serif;
  font-style: normal;


  &:hover {
    font-size: 1.3rem;
    background-color: #541AA4;
  }
`