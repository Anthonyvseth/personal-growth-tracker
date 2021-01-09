import e from 'cors'
import React, {useState} from 'react'
import { __CreateAffirm, __DeleteAffirm, __GetAffirms, __UpdateAffirm} from '../../services/AffirmationServices'
import AffirmationForm from './AffirmationForm'

const Affirmation = (props) => {
    const {affirmation} = props
    console.log("Affirmation props: ", props)
    const [affirm, setAffirm] = useState(null)

    const handleAdd = async (e) => {
        e.preventDefault()
        const formState = {
             content: affirm,
        }
        try {
            const addAffirm = await __CreateAffirm(formState)
            props.history.push("/profile")
            setAffirm('')
        } catch (error) {
            throw error
        }
    }

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

    const updateAffirm = async (e) => {
        console.log("UPDATE affirm", affirmation)
        try {
            const updateAffirm = await __UpdateAffirm(affirmation.id)
            setAffirm(updateAffirm)
        } catch (error) {
            console.log (error)
        }
    }

    if (affirm) {
        return <AffirmationForm edit={affirm} onSubmit={updateAffirm} />;
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
