import React, {useState} from 'react'
import { __CreateGoal } from '../../services/GoalServices'
import { GoalInput, Form, GoalButton, GoalH1 } from './GoalElements'

const GoalForm = (props) => {
    // console.log("ACCOM props",props)
    const [goal, setGoal] = useState('')
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
            const addGoal= await __CreateGoal(formState)
            props.history.push("/")
            setGoal('')
        } catch (error) {
            throw error
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
        <GoalH1>Goals</GoalH1>
            <GoalInput
                type='text'
                name='title'
                placeholder='Title'
                onChange={handleChange}
             />
             <GoalInput
                type='text'
                name='description'
                placeholder='description'
                onChange={handleChange}
             />
             <GoalInput
                type='integer'
                name='rating'
                placeholder='rating'
                onChange={handleChange}
             />
            <GoalButton>Submit</GoalButton>
        </Form>
    )
}

export default GoalForm