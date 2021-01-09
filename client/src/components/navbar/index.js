import React from 'react'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink 
} from './NarbarElements'
import { FaBars } from 'react-icons/fa'

const NavBar = ({toggle}) => {
    return(
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">PGT</NavLogo>
                    <MobileIcon >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='profile'>Profile</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='signin'>Signin</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default NavBar;
