import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FormButton } from './SignElements'

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
            <FormButton
            onClick={(e) => clearUser()}
            >
                Signout
            </FormButton>
        )
    }
}

export default SignOut