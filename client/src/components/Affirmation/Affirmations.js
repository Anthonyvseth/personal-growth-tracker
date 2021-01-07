import React, { useState }from 'react'
import Affirmation from './Affirmation'
import AffirmationForm from './AffirmationForm'
import AffirmationList from './AffirmationList'

const Affirmations = (props) => {
    const {user} = props
    const [show, setShow] = useState(false)
    
    return (
        <div show={show}>
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
