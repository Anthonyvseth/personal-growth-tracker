import React, {useState, useEffect, useRef} from 'react'
import { __CreateAffirm } from '../../services/AffirmationServices'
import { AffirmH1, Form, FormInput } from './AffirmElements'

const AffirmationForm = (props) => {
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
        const formState = {
             content: content,
        }
        try {
            const addAffirm = await __CreateAffirm(formState)
            props.history.push("/profile")
            setContent('')
        } catch (error) {
            throw error
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)} >
        <AffirmH1>Affirmations</AffirmH1>
            <FormInput
                type='text'
                name='content'
                placeholder='Add Affirmation'
                onChange={handleChange}
             />
        </Form>
    )
}
 export default AffirmationForm


 