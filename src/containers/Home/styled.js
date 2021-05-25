import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  background: rgb(230,97,178);
  background: linear-gradient(90deg, rgba(230,97,178,1) 4%, rgba(134,56,118,1) 36%, rgba(73,30,80,1) 77%, rgba(2,0,36,1) 98%);

   @media (max-width: 480px), handheld and (orientation: landscape) {
     height: 100vh;
   }
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
  clip-path: polygon(85% 0, 100% 100%, 0 100%, 0 0);
  
`

export const OpportunityImg = styled.img`
  width: 75%;
  margin: 50px;
  align-items: center;
  padding: 0;
  float: left;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin: 10px;
  }

  @media (min-width: 1824px) {
    margin: 1rem;
  }
`

export const SearchContainer= styled.div`
  display: table-column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 50%;
  height: 100%;
  font-family: Gudea, sans-serif;

  @media (max-width: 480px), handheld and (orientation: landscape) {
    margin: 6rem 5rem 5rem 0 ;
  }

  @media (min-width: 1824px) {
    text-align: center;
    margin-top: 15rem;
    margin-bottom: auto;
  }
`

export const TitleHome= styled.p`
  font-family: Lobster, sans-serif;
  text-align: center;
  font-size: 3rem;
  padding-bottom: 70px;
  margin: 50px;
  letter-spacing: 0.2rem;
  
  
  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size: 1.2rem;
    padding-bottom: 15px;
    margin: 10px;
  }

  @media (min-width: 1824px) {
    font-size: 4.5rem;
  }


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

  @media (max-width: 480px), handheld and (orientation: landscape) {
    font-size: 0.8rem;
    padding: 0.6rem;
    letter-spacing: 0.1rem;
    
    &:hover {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 1824px) {
    padding: 1.8rem;
    font-size: 1.6rem;
    letter-spacing: 0.3rem;

    &:hover {
      font-size: 1.7rem;
    }
  }
`