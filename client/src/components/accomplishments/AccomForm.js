import React, {useState} from 'react'
import { __CreateAccom } from '../../services/AccomServices'
import { FormInput, Form, FormButton, AccomH1 } from './AccomElements'

const AccomForm = (props) => {
    // console.log("ACCOM props",props)
    const [accom, setAccom] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(null)


    const handleChange = (e) => {
        console.log("ACCOM E.target", e.target.name)
        console.log("ACCOM E.target", e.target.value)
        const fieldName = e.target.name
        const fieldValue = e.target.value
        switch (fieldName) {
            case "title":
                setTitle(fieldValue)
                break;
            case 'description':
                setDescription(fieldValue)
                break;
            case 'rating':
                setRating(fieldValue)
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formState = {
             title: title,
             description: description,
             rating: rating
        }
        try {
            const addAccom = await __CreateAccom(formState)
            props.history.push("/")
            setAccom('')
        } catch (error) {
            throw error
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
        <AccomH1>Accomplishments</AccomH1>
            <FormInput
                type='text'
                name='title'
                placeholder='Title'
                onChange={handleChange}
             />
             <FormInput
                type='text'
                name='description'
                placeholder='description'
                onChange={handleChange}
             />
             <FormInput
                type='integer'
                name='rating'
                placeholder='rating'
                onChange={handleChange}
             />
            <FormButton>Submit</FormButton>
        </Form>
    )
}

export default AccomForm