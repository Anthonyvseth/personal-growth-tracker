import React, {useState} from 'react'
import { __UpdateAffirm } from '../../services/AffirmationServices'

const AffirmationUpdate = (props) => {
    const {affirmation} = props
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
        console.log("UPDATE affirm", affirmation)
        try {
            const updateAffirm = await __UpdateAffirm(affirmation.id)
            setContent(updateAffirm)
            console.log(content)
        } catch (error) {
            console.log (error)
        }
    }
    console.log(props)
    return (
        <form onSubmit={(e) => updateAffirm(e)} >
            <div>
                <input
                    type='text'
                    name='content'
                    placeholder={affirmation}
                    onChange={handleChange}
                />
                <button>Update</button>
            </div>
        </form>
    )
}

export default AffirmationUpdate
