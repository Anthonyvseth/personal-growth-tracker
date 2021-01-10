import React, {useState, useEffect} from 'react'
import {__GetAccoms} from '../../services/AccomServices'

const Accomplishment = (props) => {
    const {accomplishment} = props
    console.log("ACCOM props: ", props)
    const [accom, setAccom] = useState(null)

    const getAccom = async (e) => {
        e.preventDefault()
            try {
                const accom = await __GetAccoms(accomplishment)
                setAccom(accom)
            } catch (error) {
                throw error
            }
        }

    return (
        <div>
            {props.accomplishment}
        </div>
    )
}

export default Accomplishment
