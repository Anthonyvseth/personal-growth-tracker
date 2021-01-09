import React, {useState, useEffect, useRef} from 'react'
import { __CreateAffirm } from '../../services/AffirmationServices'


const AffirmationForm = (props) => {
    const [content, setContent] = useState(props.edit ? props.edit.value : '')
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
            props.history.push("/profile")
            setContent('')
        } catch (error) {
            setFormError(true)
        }
    }

    
    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            {props.edit ? (
                <div>
                <input
                    type='text'
                    name='content'
                    placeholder='Add Affirmation'
                    onChange={handleChange}
                />
                <button>Add Affirmation</button>
                </div>
            ): (
                <div>
                <input
                    type='text'
                    name='content'
                    placeholder='Add Affirmation'
                    onChange={handleChange}
                />
                <button>Affirmation</button>
                </div>
            )}
        </form>
    )
}
 export default AffirmationForm