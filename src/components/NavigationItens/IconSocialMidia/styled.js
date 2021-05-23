import styled from 'styled-components'


export const SocialMediaContainer = styled.div`
    display: inline-flex;
    width: 160px;
    margin-right: 45px;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;

  @media(max-width: 480px), handheld and (orientation: landscape) {
    width: 80px;
    margin-right: 10px;
  }
`

export const IconLink = styled.a`
    display: inline-flex;
    align-items: flex-end;
    z-index: 9999;
    text-decoration: none;
    padding-bottom: 10px;
    font-size: 1.5rem;
    margin: ${props => props.iconMargin || '15px 5px 0 10px'};
    color: ${props => props.iconColor || '#f8f8f8'};
    width: ${props => props.iconWidth || '100%'};

  &:hover,
  &:active,
  &:focus {
    color: ${props => props.iconHoverColor || '#ba623a'};
    text-decoration: none;

    @media(max-width: 480px), handheld and (orientation: landscape) {
      font-size: 0.6rem;
    }

    @media (min-width: 1824px) {
      font-size: 1.6rem;
    }
  }
`
