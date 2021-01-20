import React, {useState} from 'react'
import { __UpdateAffirm } from '../../services/AffirmationServices'
import { Form, FormInput } from './AffirmElements'


const AffirmationUpdate = (props) => {
    const {affirmation} = props
    console.log("AFFIRM UPDATE props", affirmation)
    const [content, setContent] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        switch (fieldName) {
            case "content":
                setContent(fieldValue)
        }
    }

    const updateAffirm = async (e) => {
        e.preventDefault()
        // console.log("UPDATE affirm", affirmation)
        const formState = {
            content: content,
       }
        try {
            const updateAffirm = await __UpdateAffirm(affirmation.id, formState)
            setContent(updateAffirm[1][0].content)
        } catch (error) {
            console.log (error)
        }
    }
    // console.log(affirmation)
    return (
        <Form
            onSubmit={(e) => updateAffirm(e)} >
                <FormInput
                    type='text'
                    name='content'
                    value={content}
                    placeholder={affirmation.content}
                    onChange={handleChange}
                />
        </Form>
    )
}

export default AffirmationUpdate
