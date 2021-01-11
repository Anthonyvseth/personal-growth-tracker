import React from 'react'
import Affirmations from '../components/affirmation/Affirmations'
import SignOut from '../components/signin/SignOut'
import Accoms from '../components/accomplishments/Acomms'
import Layout from '../components/Layout'

const ProfilePage = (props, isOpen, toggle) => {
    // console.log("profile page props",props)
    const {user} = props
    if (user !== null && user !== undefined) {
        return (
            <div>
                <Layout />
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