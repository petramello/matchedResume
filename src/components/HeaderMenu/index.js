import React from 'react'

import Logo from "../Logo"
import MenuBar from "../NavigationItens/MenuBar";


import { HeaderMenuContainer} from "./styled"

const HeaderMenu = () => {
    return (
        <HeaderMenuContainer>
            <Logo />
            <MenuBar />
        </HeaderMenuContainer>
    )
}

export default HeaderMenu