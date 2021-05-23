import React from 'react'

import { GrLinkedin } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa'
import {IconLink} from "./styled";


const IconSocialMedia = ({iconColor, iconHoverColor, iconWidth, iconMargin,icon, href, alt, typeIcon, children}) => {

     if (typeIcon === "github") {
         icon = <FaGithub/>;
         href = "https://github.com/petramello";
         alt = "Link para o github de Petra Mello";
     }
        else if (typeIcon === "linkedin") {
            icon= <GrLinkedin />;
            href = "https://www.linkedin.com/in/petramello/";
            alt = "Link para o linkedin de Petra Mello";
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