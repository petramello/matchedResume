import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: rgb(230,97,178);
  background: linear-gradient(90deg, rgba(230,97,178,1) 4%, rgba(134,56,118,1) 36%, rgba(73,30,80,1) 77%, rgba(2,0,36,1) 98%);
`

export const OpportunityContainer = styled.div`
  align-items: center;
  padding: 0;
  width: 50%;
  height: 100%;
  margin: 0;
  opacity: 60%;
  backdrop-filter: blur(8px);
  
  background-color: #863876;
  //background: rgb(230,97,178);
  //background: linear-gradient(90deg, rgba(230,97,178,1) 0%, rgba(134,56,118,1) 25%, rgba(73,30,80,1) 48%, rgba(51,21,67,1) 65%, rgba(25,10,51,1) 82%, rgba(2,0,36,1) 91%, rgba(2,0,36,1) 99%);
  clip-path: polygon(85% 0, 100% 100%, 0 100%, 0 0);
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
  font-family: Lobster, sans-serif;
  text-align: center;
  font-size: 3rem;
  padding-bottom: 70px;
  margin: 50px;
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
  background-color: #e661b2;
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