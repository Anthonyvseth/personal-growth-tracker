import React from 'react'
import Affirmations from '../components/affirmation/Affirmations'
import SignOut from '../components/SignOut'
import Accoms from '../components/accomplishments/Acomms'

const ProfilePage = (props) => {
    // console.log("profile page props",props)
    const {user} = props
    if (user !== null && user !== undefined) {
        return (
            <div>
                <h1>Profile</h1>
                <div>
                    <Accoms {...props} user={user} />
                    <Affirmations {...props} user={user} />
                    <SignOut {...props} />
                </div>
            </div>
        )
    }
}

export default ProfilePage