import React from 'react'
import Affirmation from './Affirmation'
import { AffirmWrapper } from './AffirmElements'

const AffirmationList = (props) => {
    // console.log("AFFIRM PROPS", props)
    const { affirmations } = props.user
    // console.log("AFFFIRMMMMSSSS ", affirmations)
    if ( affirmations !== null && affirmations !== undefined && affirmations.length > 0) {
    return (
        <AffirmWrapper>
            {affirmations.map((affirmation, index) => {
                return (
                    <Affirmation
                        affirmation={affirmation}
                        key={index}
                    />
                )
            })
            }
        </AffirmWrapper>
    )
} else {
    return null
}
}

export default AffirmationList
