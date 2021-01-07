import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

const SignOut = () => {
    const [signedOut, setSignOut] = useState(false)

    const clearUser = () => {
        localStorage.clear("user_id")
        setSignOut(true)
    }

    if (signedOut) {
        <Redirect to='/'/> 
    } else {
        return (
            <button onClick={(e) => clearUser()}>
                Signout
            </button>
        )
    }
    

}

export default SignOut