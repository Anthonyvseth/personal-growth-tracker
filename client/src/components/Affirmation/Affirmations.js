import React, { useState }from 'react'
import Affirmation from './Affirmation'
import AffirmationForm from './AffirmationForm'

import AffirmationList from './AffirmationList'

const Affirmations = (props) => {
    const {user, setNeedsRefresh} = props
    const [show, setShow] = useState(false)
    
    return (
        <div show={show}>
            <AffirmationForm 
                {...props} 
                user={user}
                setNeedsRefresh={setNeedsRefresh}
            />
            {' '}
            <AffirmationList 
                {...props}
                user={user}
                setNeedsRefresh={setNeedsRefresh}
            />
            <Affirmation 
                {...props}
                user={user}
                setNeedsRefresh={setNeedsRefresh}
            />
        </div>
    )
}

export default Affirmations
