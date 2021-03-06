import React, {useState} from 'react'
import { __DeleteAffirm, __GetAffirms} from '../../services/AffirmationServices'
import AffirmationUpdate from './AffirmationUpdate'
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import {
    AffirmContainer, AffirmCard, AffirmH2
    } from './AffirmElements'

const Affirmation = (props) => {
    const {affirmation} = props
    // console.log("AFFFFFFFF: ", affirmation)
    const [affirm, setAffirm] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);
  

    const getAffirm = async (e) => {
        e.preventDefault()
        try {
            const affirm = await __GetAffirms(affirmation)
            setAffirm(affirm)
        } catch (error) {
            throw error
        }
    }

    const deleteAffirm = async (e) => {
        // console.log("DELETE affirm", affirmation)
        try {
            await __DeleteAffirm(affirmation.id)
        } catch (error) {
            console.log (error)
        }
    }

    if (affirmation !== null && affirmation !== undefined) {
        return (
            <AffirmContainer>
                <AffirmCard>
                
                    <AffirmH2 onClick={handleShow} >{affirmation.content}</AffirmH2>
                    <button
                    onClick={(e) => deleteAffirm(e)}>
                        <FaTrash />
                    </button>
                    {show ? <AffirmationUpdate  affirmation={affirmation} /> :
                    null }
                    
                </AffirmCard>
            </AffirmContainer>
        )
        } else {
            return null
        }
}

export default Affirmation
