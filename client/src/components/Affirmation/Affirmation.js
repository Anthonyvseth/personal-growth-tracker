import React, {useState} from 'react'
import { __DeleteAffirm, __UpdateAffirm} from '../../services/AffirmationServices'

const Affirmation = (props) => {
    const {affirmation} = props
    console.log("Affirmation props: ", props)
    const [affirm, setAffirm] = useState(null)


    const deleteAffirm = async (e) => {
        console.log("DELETE affirm", affirmation)
        try {
            await __DeleteAffirm(affirmation.id)
        } catch (error) {
            console.log (error)
        }
    }

    const updateAffirm = async (e) => {
        console.log("UPDATE affirm", affirmation)
        try {
            const sentAffirm = {affirmation: affirm}
            const updateAffirm = await __UpdateAffirm(sentAffirm)
            setAffirm(updateAffirm)
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
                onClick={(e) => updateAffirm(e)}>
                    update
                </button>
            </div>
        )
        } else {
            return null
        }
}

export default Affirmation
