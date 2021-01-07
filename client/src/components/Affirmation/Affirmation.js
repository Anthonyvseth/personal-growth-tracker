import React from 'react'
import { __DeleteAffirm} from '../../services/AffirmationServices'

const Affirmation = (props) => {
    console.log(props)
    const {affirmation, setNeedsRefresh} = props
    console.log("Affirmation props: ", props)

    const deleteAffirm = async (e) => {
        console.log("DELETE affirm", affirmation)
        try {
            await __DeleteAffirm(affirmation.id)
            setNeedsRefresh(true)
        } catch (error) {
            console.log (error)
        }
    }

    if (affirmation !== null && affirmation !== undefined) {
        return (
            <div>
                <h2>affirmations</h2>
                <button
                onClick={(e) => deleteAffirm(e)}>
                    Delete
                </button>
            </div>
        )
        } else {
            return null
        }
}

export default Affirmation
