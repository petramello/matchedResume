import styled from 'styled-components';

export const MatchDiv = styled.div`
  position: fixed;
  width: 350px;
  height: 700px;
  display: inline-table;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Lobster, sans-serif;
  color: #e661b2;
  background-color: #3C393A;
  border: 1px solid #7c7c7c;
  border-radius: 5%;
  z-index: 999;

  @media (max-width: 370px), handheld and (orientation: landscape) {
    width: fit-content;
    height: 620px;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    width: fit-content;
    height: 620px;
  }

  //@media (min-width: 1824px) {
  //  margin: 1rem;
  //}
`










