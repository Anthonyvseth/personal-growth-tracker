import React, { useState } from 'react'
import { __GetAccoms } from '../../services/AccomServices'
import Accomplishment from './Accomplishment'

const AccomList = (props) => {
    // console.log("ACCOMLIST PROPS", props)
    const {accomplishment} = props.user
    // console.log("ACOMLISTTTTTTT ", accomplishment)
    
    const [accom, setAccom] = useState('')
    
    // const getAccom = async (e) => {
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

export default AccomList
