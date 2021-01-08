import React from 'react'
import {
    Nav, 
    NavBarContainer, 
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
                <NavBarContainer>
                    <NavLogo to="/">PGT</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
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
                </NavBarContainer>
            </Nav>
        </div>
    )
}

export default NavBar;
