import React from 'react'
import Affirmations from '../components/Affirmation/Affirmations'
import SignOut from '../components/SignOut'

const ProfilePage = (props) => {
    const {user} = props
    if (user !== null && user !== undefined) {
        return (
            <div>
                <h1>Profile</h1>
                <div>
                    <Affirmations user={user} />
                    <SignOut {...props} />
                </div>
            </div>
        )
    }
}

export default ProfilePage