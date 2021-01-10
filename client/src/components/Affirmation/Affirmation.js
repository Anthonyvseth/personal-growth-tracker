import React, {useState} from 'react'
import { __CreateAffirm, __DeleteAffirm, __GetAffirms, __UpdateAffirm} from '../../services/AffirmationServices'
import AffirmationUpdate from './AffirmationUpdate'
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Affirmation = (props) => {
    const {affirmation} = props
    console.log("Affirmation props: ", affirmation)
    const [affirm, setAffirm] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

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
            <div>
                {affirmation.content}
                <button
                onClick={(e) => deleteAffirm(e)}>
                    <FaTrash />
                </button>
                <button onClick={handleShow}>
                <FaPencilAlt
                    show={(show)}
                    onHide={handleClose}
                />
                    <AffirmationUpdate  affirmation={affirmation.content} />
                </button>
            </div>
        )
        } else {
            return null
        }
}

export default Affirmation
