import React, {useState} from 'react'
import { __UpdateAffirm } from '../../services/AffirmationServices'

const AffirmationUpdate = (props) => {
    const [content, setContent] = useState('')

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
            const addAffirm = await __UpdateAffirm(formState)
            props.history.push("/profile")
            setContent('')
        } catch (error) {
            throw error
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <div>
                <input
                    type='text'
                    name='content'
                    placeholder='Update Affirmation'
                    onChange={handleChange}
                />
                <button>Update</button>
            </div>
        </form>
    )
}

export default AffirmationUpdate
