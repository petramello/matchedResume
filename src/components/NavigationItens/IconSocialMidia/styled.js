import styled from 'styled-components'


export const IconLink = styled.a`
    display: flex;
    text-decoration: none;
    color: #e661b2;
    margin: 80px 5px;

  &:hover,
  &:active,
  &:focus {
    color: #541AA4;
    text-decoration: none;
  }

  @media (max-width: 480px), handheld and (orientation: landscape) {
    color: white;
    display: inline-block;
    margin: 25px 5px;

    &:focus {
      color: #c9b1e3;
      text-decoration: none;
    }
  }

  @media (min-width: 1824px) {
    margin: 15px 5px;
  }
`
