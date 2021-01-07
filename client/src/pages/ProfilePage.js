import React from 'react'
import Affirmation from '../components/Affirmation/Affirmation'
import SignOut from '../components/SignOut'

const ProfilePage = () => {
    return (
        <div>
            <h1>Profile</h1>
            <div>
                <Affirmation />
                <SignOut/>
            </div>
        </div>
    )
}

export default ProfilePage