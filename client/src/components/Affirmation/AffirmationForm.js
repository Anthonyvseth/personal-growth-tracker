import React, {useState} from 'react'
import { use } from '../../../../routes/UserRoute'
import { __CreateAffirm } from '../../services/AffirmationServices'
import TextInput from '../TextInput'

const AffirmationForm = (props) => {
    const{setnNeedsRefresh} = props
    const [content, setContent] = useState('')
    const [formError, setFormError] = useState('')
    
    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        switch (fieldName) {
            case "content":
                setContent(fieldValue)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formState = {
             content: content,
        }
        try {
            const addAffirm = await __CreateAffirm(formState)
            setnNeedsRefresh(true)
            props.history.push("/profile")
        } catch (error) {
            setFormError(true)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <TextInput
                type='text'
                name='content'
                placeholder='Add Affirmation'
                onChange={handleChange}
             />
        </form>
    )
}
 export default AffirmationForm