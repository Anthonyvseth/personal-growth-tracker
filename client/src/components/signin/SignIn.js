import React, {useState} from 'react'
import {__SigninUser} from '../../services/UserServices'
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
    } from './SignElements'
import Video from '../../videos/video.mp4';
import {FaRegGrinWink} from 'react-icons/fa'


const SignIn = (props) => {
    console.log("sign in props: ", props)
    const {setUser} = props
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const emailField = (e) => {
        setLoginValue(e.target.value)
        console.log("Email: ", loginValue)
    }

    const passwordField = (e) => {
        setPasswordValue(e.target.value);
        console.log('Password: ', passwordValue);
    };

    const handleSubmit = async (event) => {
        console.log("Handle login", loginValue, passwordValue)
        event.preventDefault()
        try {
            const userData = {email: loginValue, password: passwordValue}
            const loginResponse = await __SigninUser(userData)
            console.log('Login Response: ', loginResponse === undefined);
            if (loginResponse !== "") {
                console.log("SIGNINLOGIN RES ", loginResponse)
                setUser(loginResponse)
                props.history.push('/profile');
            }
        } catch (error) {
            throw error
        }
    };

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
                    <Form action='#' >
                        <FormH1>Sign in to your account</FormH1>
                            <FormLabel>Email</FormLabel>
                                <FormInput
                                    name="email"
                                    type='email'
                                    placeholder='Email'
                                    onChange={emailField}
                                />
                        <FormLabel>Password</FormLabel>
                            <FormInput
                                name="password"
                                type='password'
                                placeholder='Password'
                                onChange={passwordField}
                            />
                        <FormButton to='/profile'>Login</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn