import React from 'react'
import {
     CloseIcon,
      Icon, 
      SidebarContainer,
      SidebarWrapper,
      SidebarMenu,
      SideBtnWrap,
      SidebarLink,
      SidebarRoute,
    } from './SidebarElements'


const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to='/' 
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                     >
                        Home
                    </SidebarLink>
                    <SidebarLink 
                        to='/accomplishments' 
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Accomplishments
                    </SidebarLink>
                    <SidebarLink 
                        to='/about' 
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        About
                    </SidebarLink>
                    <SidebarLink 
                        to='/signup' 
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
