import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Chinese</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                </NavIcon>
            </Nav>
        </>
    )
}

export default NavBar
