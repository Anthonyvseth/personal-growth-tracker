import React, {useState} from 'react'

export const AccomForm = (props) => {
    const [accom, setAccom] = useState('')

    const handleChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        switch (fieldName) {
            case "content":
                setAccom(fieldValue)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setAccom('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Accomplishments</h1>
            <input
                type='text'
                name='title'
                placeholder='Title'
                onChange={handleChange}
             />
             <input
                type='text'
                name='description'
                placeholder='description'
                onChange={handleChange}
             />
             <input
                type='integer'
                name='rating'
                placeholder='rating'
                onChange={handleChange}
             />
            <button>Submit</button>
        </form>
    )
}
