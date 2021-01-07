import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SignOut = () => {
    const [signedOut, setSignedOut] = useState(false)

    const clearUser = () => {
        localStorage.clear("user_id")
        setSignedOut(true)
    }

    if (signedOut) {
        <Link to='/' push={true}/> 
    } else {
        return (
            <button 
            onClick={(e) => clearUser()}
            >
                Signout
            </button>
        )
    }
}

export default SignOut