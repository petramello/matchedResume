import React from 'react'

import {MenuList, MenuLink} from "./styled";

const MenuBar = () => {
    return (
        <MenuList>
            <MenuLink to="/" >HOME</MenuLink>
            <MenuLink to="/match" >MATCH</MenuLink>
            <MenuLink to="/profile" >PROFILE</MenuLink>
        </MenuList>
    )
}
export default MenuBar

