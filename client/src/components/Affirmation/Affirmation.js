import React, {useState} from 'react'
import { __CreateAffirm, __DeleteAffirm, __GetAffirms, __UpdateAffirm} from '../../services/AffirmationServices'
import AffirmationUpdate from './AffirmationUpdate'

const Affirmation = (props, {isOpen, toggle}) => {
    const {affirmation} = props
    console.log("Affirmation props: ", props)
    const [affirm, setAffirm] = useState(null)

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
        console.log("DELETE affirm", affirmation)
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
                    Delete
                </button>
                <button 
                isOpen={isOpen} toggle={toggle}>
                    <AffirmationUpdate affirmation={affirmation.content} />
                </button>
            </div>
        )
        } else {
            return null
        }
}

export default Affirmation
