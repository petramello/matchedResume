import styled from 'styled-components';
import {Container} from "../Home/styled";


export  const MainContainer = styled(Container)`
  display: inline-flex;
  position: relative;
  height: 100vh;
  background-size: cover !important;
  background: rgb(230,97,178);
  background: linear-gradient(90deg, rgba(230,97,178,1) 6%, rgba(221,92,118,1) 20%, rgba(220,91,111,1) 34%, rgba(213,88,67,1) 64%);
`

export const MatchContainer = styled.div`
  display: inline-flex;
  position: relative;
  left: 0;
  width: 90%;
  height: 100vh;
  background-color: #dd5c76;
  clip-path: polygon(0 0, 100% 100%, 0 100%,100% 0);
`
