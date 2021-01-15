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
    VideoBg,
    HeroBg
    } from './SignUpElements'
import Video from '../../videos/video.mp4'
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
        props.history.push('/');
      } catch (error) {
        throw error
      }
    }   
    return (
        <Container>
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
                <FormWrap onSubmit={(e) => handleSubmit(e)}>
                    <Icon to="/"> 
                        <FaRegGrinWink />
                            Pgt
                    </Icon>
                    <FormContent>
                    <Form>
                    <FormH1>Create an account today!</FormH1>
                        <FormLabel>Username</FormLabel>
                            <TextInput 
                            type = 'text'
                            name = 'userName'
                            placeholder = 'Enter your username'
                            onChange={formChange}
                            />
                        <FormLabel>First Name</FormLabel>
                            <TextInput 
                            type = 'text'
                            name = 'firstName'
                            placeholder = 'Enter your fisrt name'
                            onChange={formChange}
                            />
                        <FormLabel>Last Name</FormLabel>
                            <TextInput 
                            type = 'text'
                            name = 'lastName'
                            placeholder = 'Enter your last name'
                            onChange={formChange}
                            />

                        <FormLabel>Email</FormLabel>
                            <TextInput 
                            type = 'text'
                            name = 'email'
                            placeholder = 'Enter your email'
                            onChange={formChange}
                            />
                        <FormLabel>Password</FormLabel>
                            <TextInput 
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
