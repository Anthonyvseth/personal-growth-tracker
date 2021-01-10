import React, { useState }from 'react'
import Affirmation from './Affirmation'
import AffirmationForm from './AffirmationForm'
import AffirmationList from './AffirmationList'
import AffirmationUpdate from './AffirmationUpdate'

const Affirmations = (props) => {
    const {user} = props
    const [show, setShow] = useState(true)
    
    return (
        <div show={show}>
        <h1>Affirmations</h1>
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
        </div>
    )
}

export default Affirmations
