import React from 'react'
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NarbarElements'
import { FaBars } from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'>PGT</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLink to="/about">About</NavLink>
                            </NavItem>
                        </NavMenu>
                </NavBarContainer>
            </Nav>
        </div>
    )
}

export default NavBar;
