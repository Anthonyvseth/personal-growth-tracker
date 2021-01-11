import React, {useState} from 'react'
import { __GetAccoms } from '../../services/AccomServices'
import  AccomForm  from './AccomForm'
import AccomList from './AccomList'
import Accomplishment from './Accomplishment'
import {AccomHeader} from './AccomElements'

const Acomms = (props) => {
    const {user} = props
    // console.log("ACCOMSSSS user-props", user)
    const [show, setShow] = useState(true)

    return (
        <AccomHeader show={show}>
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
        </AccomHeader>
    )
}

export default Acomms
