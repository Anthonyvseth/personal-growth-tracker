import React, {useState} from 'react'
import { __GetAccoms } from '../../services/AccomServices'
import  AccomForm  from './AccomForm'
import AccomList from './AccomList'
import Accomplishment from './Accomplishment'

const Acomms = (props) => {
    console.log("ACCOMSSSS props", props)
    const {accomplishment} = props.user
    const [accoms, setAccoms] = useState('')

    const getAccoms = async (e) => {
        e.preventDefault()
        try {
            const accom = await __GetAccoms(accomplishment)
            setAccoms(accom)
        } catch (error) {
            throw error
        }
    }
    return (
        <div>
            <h1>Accomplishments</h1>
            <div>
                {accomplishment}
            </div>
            <AccomForm 
                {...props}
                user={accomplishment}
            />
            {' '}
            <AccomList
                {...props}
                user={accomplishment}
            />
            <Accomplishment
                {...props}
                user={accomplishment}
            />
        </div>
    )
}

export default Acomms
