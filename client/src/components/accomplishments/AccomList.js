import React from 'react'
import { __GetAccoms } from '../../services/AccomServices'
import Accomplishment from './Accomplishment'
import {
    AccomWrapper 
} from './AccomElements'

const AccomList = (props) => {
    // console.log("ACCOMLIST PROPS", props)
    const {accomplishment} = props.user
    console.log("ACOMLISTTTTTTT ", accomplishment) 

    if ( accomplishment !== null && accomplishment !== undefined && accomplishment.length > 0) {
    return (
        <AccomWrapper>
            {accomplishment.map((accomplishment, index) => {
                return (
                    <Accomplishment
                        accomplishment={accomplishment}
                        key={index}

                    />
                )
            })
            }
        </AccomWrapper>
    )
} else {
    return null
}
}

export default AccomList
