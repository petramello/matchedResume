import styled from "styled-components";

export const AvatarContainer= styled.div`
  margin: 25px 0;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-around;
  text-align: center;

  @media (max-width: 370px), handheld and (orientation: landscape) {
    width: 90%;
    justify-content: space-between;
  }
`

export const AvatarImg= styled.img`
  width: 165px;
  height: 165px;
  object-fit: cover;
  text-align: center;
  margin: 10px;
  border-radius: 50%;
  border: ${props => (props.border || "solid #e661b2 4px")};
 
  @media (max-width: 370px), handheld and (orientation: landscape) {
    width: 150px;
    height: 150px;
  }
`