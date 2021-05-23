import React from 'react'

import IconSocialMedia from "../NavigationItens/IconSocialMidia";

import {FooterContainer, FooterTextDiv, FooterText} from "./styled";
import {SocialMediaContainer} from "../NavigationItens/IconSocialMidia/styled";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTextDiv>
                <FooterText>&copy; petramello - todos os direitos reservados</FooterText>
            </FooterTextDiv>
            <SocialMediaContainer>
                <IconSocialMedia typeIcon="email" />
                <IconSocialMedia typeIcon="whatsapp" />
            </SocialMediaContainer>
        </FooterContainer>
    )
}
export default Footer
