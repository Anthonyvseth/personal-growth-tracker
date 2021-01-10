import React from 'react'

import Accomplishment from './Accomplishment'

const AccomList = (props) => {
    const {accomplishment} = props.user
    console.log("ACCOMLIST PROPS", accomplishment)
    return (
        <div>
            <Accomplishment {...accomplishment}/>
        </div>
    )
}

export default AccomList
