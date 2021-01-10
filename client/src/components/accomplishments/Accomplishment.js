import React, {useState, useEffect} from 'react'
import {__DeleteAffirm, __GetAccoms} from '../../services/AccomServices'
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import AccomList from './AccomList';

const Accomplishment = (props) => {
    // console.log("MAIN ACCOM props", props)
    const {accomplishment} = props
    // console.log("ACCCCCCCCOM", accomplishment)
        const [accoms, setAccoms] = useState(null)

    const getAccoms = async () => {
        // e.preventDefault()
        try {
            const accom = await __GetAccoms(accomplishment)
            // console.log("ACOMM from GetACCOMS", accom)
            setAccoms(accom)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getAccoms()
    }, [])

    const deleteAccom = async (e) => {
        console.log("DELETE ACCOM", accomplishment)
        e.preventDefault()
        try {
            await __DeleteAffirm(props.accomplishment.id)
        } catch (error) {
            throw error
        }
    }
    return ( accomplishment ? (
        <div>
            <h3>{accomplishment.title}</h3>
            <h4>{accomplishment.description}</h4>
            <h4>{accomplishment.rating}</h4>
            <button
                onClick={(e) => deleteAccom(e)}>
                    <FaTrash />
                </button>
        </div>
    ) : (
        <h1>...loading</h1>
    )
    )
}


export default Accomplishment
