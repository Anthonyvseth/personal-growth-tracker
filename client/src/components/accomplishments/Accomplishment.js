import React, {useState, useEffect} from 'react'
import {__DeleteAffirm, __GetAccoms} from '../../services/AccomServices'
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import AccomList from './AccomList';
import AccomUpdate from './AccomUpdate';
import { 
    AccomCard,
    AccomContainer,
    AccomP,
    AccomH2,
    AccomNum
    } from './AccomElements';

const Accomplishment = (props) => {
    // console.log("MAIN ACCOM props", props)
    const {accomplishment} = props
    console.log("ACCCCCCCCOM", accomplishment)
    const [accoms, setAccoms] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);
  

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
        <AccomContainer>
            <AccomCard > 
            <AccomH2 onClick={handleShow} >{accomplishment.title}</AccomH2>
            <AccomP onClick={handleShow} >{accomplishment.description}</AccomP>
            <AccomNum onClick={handleShow} >{accomplishment.rating}</AccomNum>
            <button
                onClick={(e) => deleteAccom(e)}>
                    <FaTrash />
            </button>
                <div onClick={handleShow}>
            </div>
                {show ? <AccomUpdate  accomplishment={accomplishment} /> :
                null }
            </AccomCard>
            </AccomContainer>
    ) : (
        <h1>{null}</h1>
    )
    )
}


export default Accomplishment
