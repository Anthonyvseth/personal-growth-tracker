import React, {useState} from 'react'
import { __UpdateAffirm } from '../../services/AffirmationServices'

const AffirmationUpdate = (props) => {
    const {affirmation} = props
    // console.log("AFFIRM UPDATE props", props)
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
        // console.log("UPDATE affirm", affirmation)
        const formState = {
            content: content,
       }
        try {
            const updateAffirm = await __UpdateAffirm(formState)
            setContent(updateAffirm)
        } catch (error) {
            console.log (error)
        }
    }
    // console.log(affirmation)
    return (
        <form
            onSubmit={(e) => updateAffirm(e)} >
            <div onClick={toggle} >
                <input
                    type='text'
                    name='content'
                    placeholder={affirmation}
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}

export default AffirmationUpdate
