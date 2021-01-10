import React, {useState} from 'react'
import TextInput from './textInputs/TextInput'
import {__RegisterUser} from '../services/UserServices'

const SignUp = (props) => {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        switch (fieldName) {
            case 'userName':
                setUserName(fieldValue)
                break
            case 'firstName':
                setFirstName(fieldValue)
                break
            case 'lastName':
                setlastName(fieldValue)
                break
            case 'email':
                setEmail(fieldValue)
                break
            case 'password':
                setPassword(fieldValue)
                break
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

    const formState = {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    try {
        const userResponse = await __RegisterUser(formState);
        props.setUser(userResponse)
        props.history.push('/profile');
      } catch (error) {
        throw error
      }
    }   
    return (
        <div>
            <h1>Get started today!</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label>Username</label>
                            <TextInput 
                            type = 'text'
                            name = 'userName'
                            placeholder = 'Enter your username'
                            onChange={formChange}
                            />
                    </div>
                    <div>
                        <label>First Name</label>
                            <TextInput  
                            type = 'text'
                            name = 'firstName'
                            placeholder = 'Enter your fisrt name'
                            onChange={formChange}
                            />
                    </div>
                    <div>
                        <label>Last Name</label>
                            <TextInput 
                            type = 'text'
                            name = 'lastName'
                            placeholder = 'Enter your last name'
                            onChange={formChange}
                            />
                    </div>
                    <div>
                        <label>Email</label>
                            <TextInput 
                            type = 'text'
                            name = 'email'
                            placeholder = 'Enter your email'
                            onChange={formChange}
                            />
                    </div>
                    <div>
                        <label>Password</label>
                            <TextInput  
                            type = 'text'
                            name = 'password'
                            placeholder = 'Enter your password'
                            onChange={formChange}
                            />
                    </div>
                    <button >Sign Up</button>
                </form>
        </div>
    )
}

export default SignUp
