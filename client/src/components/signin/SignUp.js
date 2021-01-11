import React, {useState} from 'react'
import TextInput from '../textInputs/TextInput'
import {__RegisterUser} from '../../services/UserServices'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
    } from './SignUpElements'
import {FaRegGrinWink} from 'react-icons/fa'

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
        <Container>
                <FormWrap onSubmit={(e) => handleSubmit(e)}>
                    <Icon to="/"> 
                        <FaRegGrinWink />
                            Pgt
                    </Icon>
                    <FormContent>
                    <Form>
                    <FormH1>Create an account today!</FormH1>
                        <FormLabel>Username</FormLabel>
                            <FormInput 
                            type = 'text'
                            name = 'userName'
                            placeholder = 'Enter your username'
                            onChange={formChange}
                            />
                        <FormLabel>First Name</FormLabel>
                            <FormInput
                            type = 'text'
                            name = 'firstName'
                            placeholder = 'Enter your fisrt name'
                            onChange={formChange}
                            />
                        <FormLabel>Last Name</FormLabel>
                            <FormInput
                            type = 'text'
                            name = 'lastName'
                            placeholder = 'Enter your last name'
                            onChange={formChange}
                            />

                        <FormLabel>Email</FormLabel>
                            <FormInput
                            type = 'text'
                            name = 'email'
                            placeholder = 'Enter your email'
                            onChange={formChange}
                            />
                        <FormLabel>Password</FormLabel>
                            <FormInput 
                            type = 'text'
                            name = 'password'
                            placeholder = 'Enter your password'
                            onChange={formChange}
                            />
                    <FormButton>Sign Up</FormButton>
                    </Form>
                    </FormContent>
                </FormWrap>
        </Container>
    )
}

export default SignUp
