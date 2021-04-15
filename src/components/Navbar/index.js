import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Chinese</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default NavBar
