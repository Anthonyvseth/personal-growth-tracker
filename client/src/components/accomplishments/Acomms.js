import React, {useState} from 'react'
import { __GetAccoms } from '../../services/AccomServices'
import  AccomForm  from './AccomForm'
import AccomList from './AccomList'
import Accomplishment from './Accomplishment'

const Acomms = (props) => {
    const {user} = props
    // console.log("ACCOMSSSS user-props", user)
    const [show, setShow] = useState(true)

    return (
        <div show={show}>
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
