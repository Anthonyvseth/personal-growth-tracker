import React from 'react'
import SignIn from '../components/signin/SignIn'
import SignUp from '../components/signin/SignUp'
import Sidebar from '../components/navbar/index'
import Navbar from '../components/sidebar/index'

const HomePage = (isOpen, toggle) => {

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <SignIn />
            <SignUp />
        </div>
    )
}

export default HomePage
