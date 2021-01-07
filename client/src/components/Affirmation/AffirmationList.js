import React from 'react'
import Affirmation from './Affirmation'


const AffirmationList = (props) => {
    const { setNeedsRefresh } = props
    const { affirmations } = props.user
    
    if ( affirmations !== null && affirmations !== undefined && affirmations.length > 0) {
    return (
        <div>
            {affirmations.map((affirmation, index) => {
                return (
                    <Affirmation
                        affirmation={affirmation}
                        key={index}
                        setNeedsRefresh={setNeedsRefresh} 
                    />
                )
            })
            }
        </div>
    )
} else {
    return null
}
}

export default AffirmationList
