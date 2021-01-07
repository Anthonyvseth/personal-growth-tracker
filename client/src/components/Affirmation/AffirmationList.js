import React from 'react'
import Affirmation from './Affirmation'

const AffirmationList = (props) => {
    const { affirmations } = props.user
    // const [affirm, setAffirm] = useState([])
    
    if ( affirmations !== null && affirmations !== undefined && affirmations.length > 0) {
    return (
        <div>
            {affirmations.map((affirmation, index) => {
                return (
                    <Affirmation
                        affirmation={affirmation}
                        key={index}
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
