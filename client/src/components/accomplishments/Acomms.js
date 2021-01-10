import React, {useState} from 'react'
import { __GetAccoms } from '../../services/AccomServices'
import  AccomForm  from './AccomForm'
import AccomList from './AccomList'
import Accomplishment from './Accomplishment'

const Acomms = (props) => {
    console.log("ACCOMSSSS props", props)
    const {user} = props

    return (
        <div>
            <h1>Accomplishments</h1>

            <AccomForm 
                {...props}
                user={user}
            />
            {' '}
            <AccomList
                {...props}
                user={user}
            />
            <Accomplishment
                {...props}
                user={user}
            />
        </div>
    )
}

export default Acomms
