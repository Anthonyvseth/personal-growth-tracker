import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const HomePage = (props) => {

    return (
        <div>
            <h1>WELCOME!!</h1>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default HomePage
