import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: inline-flex;
    width: 100%;
    height: 110px;
    background-color: black;
    color: #f8f8f8;
    opacity: 80%;
    font-family: Gudea, sans-serif;
    font-size: 1rem;
    text-align: center;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    font-size: 0.8rem;
  }

  @media (min-width: 1824px) {
    font-size: 1.15rem;
  }
`

export const FooterTextDiv = styled.div`
    width: 100%;
    display: inline-block;
    position: relative;
    align-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    left: 6.5%;
    margin-top: 20px;
  
  @media(max-width: 480px), handheld and (orientation: landscape) {
    font-size: 0.rem;
  }
`

export const FooterText = styled.p`
    position: relative;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    font-size: 0.7rem;
  }

  @media (min-width: 1824px) {
    font-size: 1.15rem;
  }
`