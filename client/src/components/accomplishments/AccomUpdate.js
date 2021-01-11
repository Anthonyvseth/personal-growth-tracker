import React, {useState} from 'react'
import {__UpdateAccom} from '../../services/AccomServices'
import Accomplishment from './Accomplishment'

const AccomUpdate = (props) => {
    const {accomplishment} = props
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
    
    const updateAccom = async (e) => {
        e.preventDefault()
        const formState = {
            title: title,
            description: description,
            rating: rating
        }
        try {
            const updateAccom = await __UpdateAccom(accomplishment.id, formState)
            // console.log("__UPDATE ACCOMMMMMMS", updateAccom.data)
            setTitle(updateAccom[1][0].title)
            setDescription(updateAccom[1][0].description)
            setRating(updateAccom[1][0].rating)
        } catch (error) {
            console.log (error)
        }
    }

    return (
        <form onSubmit={(e) => updateAccom(e)}>
            <input
                type='text'
                name='title'
                value={title}
                placeholder='Title'
                onChange={handleChange}
             />
             <input
                type='text'
                name='description'
                value={description}
                placeholder='description'
                onChange={handleChange}
             />
             <input
                type='integer'
                name='rating'
                value={rating}
                placeholder='rating'
                onChange={handleChange}
             />
            <button>Submit</button>
        </form>
    )
}

export default AccomUpdate