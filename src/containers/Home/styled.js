import styled from 'styled-components';

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
  background-color: #0839be;
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
  text-align: center;

  font-size: 2rem;
  margin-bottom: 50px;
  letter-spacing: 0.2rem;
`

export const SquareButton= styled.button`
  align-items: center;
  justify-content: center;
  width: 150px;
  padding: 1.5rem;
  color: white;
  font-weight: bold;
  background-color: #0839be;
  letter-spacing: 0.2rem;
`