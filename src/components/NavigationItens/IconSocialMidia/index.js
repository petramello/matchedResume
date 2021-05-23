import React from 'react'

import { FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import {IconLink} from "./styled";


const IconSocialMedia = ({iconColor, iconHoverColor, iconWidth, iconMargin,icon, href, alt, typeIcon, children}) => {

     if (typeIcon === "email") {
         icon = <FiMail/>;
         href = "mailto:petramello@gmail.com";
         alt = "ícone para enviar e-mail para o endereço: petramello@gmail.com";
     }
        else if (typeIcon === "whatsapp") {
            icon= <FaWhatsapp />;
            href = "https://wa.me/5521999169179";
            alt = "ícone de whatsapp para enviar mensagem para a desenvolvedora front-end: +5521999169179";
        }

    const defaultProps = {
        target: 'blank',
        rel: 'noopener noreferrer',
        iconColor,
        iconHoverColor,
        iconWidth,
        iconMargin,
        href,
        alt,
    }


    return (
        <IconLink {...defaultProps } >
            {children}
            <i>{icon}</i>
        </IconLink>
    )
}
export default IconSocialMedia