import React, {useState} from 'react'
import {__RegisterUser} from '../services/UserServices'

const SignUp = (props) => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('')

    const formChange = (e) => {
        const fieldName = e.target.value
        const fieldValue = e.target.value
        switch (fieldName) {
            case 'userName':
                setUsername(fieldValue)
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
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    try {
        const accountResponse = await __RegisterUser(formState);
        props.setAccount(accountResponse)
        props.history.push('/home');
      } catch (error) {
        setFormError(true);
      }
    }   
    return (
        <div>
            <h1>Get started today!</h1>
                <form onClick={(e) => handleSubmit(e)}>
                    <div>
                        <label>Username</label>
                            <input 
                            type = 'text'
                            name = 'username'
                            placeholder = 'Enter your username'
                            onChange={formChange}
                            />
                    </div>
                    <div>
                        <label>First Name</label>
                            <input 
                            type = 'text'
                            name = 'first name'
                            placeholder = 'Enter your fisrt name'
                            onChange={formChange}
                            />
                    </div>
                    <div>
                        <label>Last Name</label>
                            <input 
                            type = 'text'
                            name = 'last name'
                            placeholder = 'Enter your last name'
                            onChange={formChange}
                            />
                    </div>
                    <div>
                        <label>Email</label>
                            <input 
                            type = 'text'
                            name = 'email'
                            placeholder = 'Enter your email'
                            onChange={formChange}
                            />
                    </div>
                    <div>
                        <label>Password</label>
                            <input 
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
