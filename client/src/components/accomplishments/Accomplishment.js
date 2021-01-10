import React, {useState, useEffect} from 'react'
import {__DeleteAffirm, __GetAccoms} from '../../services/AccomServices'
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Accomplishment = (props) => {
    console.log("MAIN ACCOM props", props.user)
    const {accomplishment} = props
    // console.log("MAIN ACCOM", accomplishment)
        const [accoms, setAccoms] = useState(null)

    const getAccoms = async (e) => {
        e.preventDefault()
        try {
            const accom = await __GetAccoms(accomplishment.id)
            console.log("ACOMM from GetACCOMS", accom)
            setAccoms(accom)
        } catch (error) {
            throw error
        }
    }

    const deleteAccom = async (e) => {
        console.log("DELETE ACCOM", accomplishment.id)
        e.preventDefault()
        try {
            await __DeleteAffirm(props.accomplishment.id)
        } catch (error) {
            throw error
        }
    }
    return (
        <div>
            {accomplishment}
            <button
                onClick={(e) => deleteAccom(e)}>
                    <FaTrash />
                </button>
        </div>
    )
}

export default Accomplishment
