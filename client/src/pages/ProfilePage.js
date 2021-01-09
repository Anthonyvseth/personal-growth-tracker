import React from 'react'
import AccomList from '../components/accomplishments/AccomList'
import Affirmations from '../components/affirmation/Affirmations'
import SignOut from '../components/SignOut'

const ProfilePage = (props) => {
    console.log("profile page props",props)
    const {user} = props
    if (user !== null && user !== undefined) {
        return (
            <div>
                <h1>Profile</h1>
                <div>
                    <AccomList user={user} />
                    <Affirmations user={user} />
                    <SignOut {...props} />
                </div>
            </div>
        )
    }
}

export default ProfilePage