import React, { useState }from 'react'
import Affirmation from './Affirmation'
import AffirmationForm from './AffirmationForm'
import AffirmationList from './AffirmationList'
import AffirmationUpdate from './AffirmationUpdate'
import { AffirmHeader } from './AffirmElements'

const Affirmations = (props) => {
    const {user} = props
    // console.log("AFFFIRMMMSS user-props", user)
    const [show, setShow] = useState(true)
    
    return (
        <AffirmHeader>
            <AffirmationForm 
                {...props} 
                user={user}
            />
            {' '}
            <AffirmationList 
                {...props}
                user={user}
            />
            <Affirmation
                {...props}
                user={user}
            />
        </AffirmHeader>
    )
}

export default Affirmations
