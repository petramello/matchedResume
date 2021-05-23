import styled from "styled-components";

export const AvatarContainer= styled.div`
  width: 430px;
  display: flex;
  position: relative;
  justify-content: space-between;
  text-align: center;
`

export const AvatarImg= styled.img`
  width: 170px;
  height: 170px;
  text-align: center;
  margin: 10px;
  border-radius: 50%;
  border: ${props => (props.border || "solid #e661b2 4px")};
`