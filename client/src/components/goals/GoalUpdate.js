import React, {useState} from 'react'
import {__UpdateGoal } from '../../services/GoalServices'
import Goal from './Goal'
import { GoalInput, Form, GoalButton } from './GoalElements'

const GoalUpdate = (props) => {
    const {goal} = props
    // console.log("ACCCCCC UPDATE", accomplishment)
    // console.log("ACCOMPLISHMENT ID", accomplishment.id)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(null)

    const handleChange = (e) => {
        console.log("ACCOM E.target NAME", e.target.name)
        console.log("ACCOM E.target VALUE", e.target.value)
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
    
    const updateGoal = async (e) => {
        e.preventDefault()
        const formState = {
            title: title,
            description: description,
            rating: rating
        }
        try {
            const updateGoal = await __UpdateGoal(goal.id, formState)
            // console.log("__UPDATE ACCOMMMMMMS", updateAccom.data)
            setTitle(updateGoal[1][0].title)
            setDescription(updateGoal[1][0].description)
            setRating(updateGoal[1][0].rating)
        } catch (error) {
            console.log (error)
        }
    }

    return (
        <Form onSubmit={(e) => updateGoal(e)}>
            <GoalInput
                type='text'
                name='title'
                value={title}
                placeholder='Title'
                onChange={handleChange}
             />
             <GoalInput
                type='text'
                name='description'
                value={description}
                placeholder='description'
                onChange={handleChange}
             />
             <GoalInput
                type='integer'
                name='rating'
                value={rating}
                placeholder='rating'
                onChange={handleChange}
             />
            <GoalButton>Submit</GoalButton>
        </Form>
    )
}

export default GoalUpdate