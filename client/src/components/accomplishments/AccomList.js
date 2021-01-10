import React, { useState } from 'react'
import { __GetAccoms } from '../../services/AccomServices'
import Accomplishment from './Accomplishment'

const AccomList = (props) => {
    const {accomplishment} = props.user
    console.log("ACCOMLIST PROPS", accomplishment)
    // const [accom, setAccom] = useState('')
    
    // const getAccom = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const res = await __GetAccoms(accomplishment)
    //         console.log("GETACCOM... ACCOMLIST", res.data)
    //         setAccom(res.data)
    //     } catch (error) {
    //         throw error
    //     }
    // }
    // getAccom()
    if ( accomplishment !== null && accomplishment !== undefined && accomplishment.length > 0) {
    return (
        <div>
            {accomplishment.map((accomplishment, index) => {
                return (
                    <Accomplishment
                        accomplishment={accomplishment}
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

export default AccomList
