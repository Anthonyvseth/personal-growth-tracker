import React, {useState} from 'react'
import TextInput from '../components/TextInput'
import {__SigninUser} from '../services/UserServices'

const SignIn = (props) => {
    console.log("sign in props: ", props)
    const {setUser} = props
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [formError, setFormError] = useState(false)

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
                setUser(loginResponse)
                props.history.push('/profile');
            }
        } catch (error) {
            setFormError(true);
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Login</h1>
                <div>
                    <label> Email
                        <TextInput
                            name="email"
                            type='email'
                            placeholder='Email'
                            onChange={emailField}
                        />
                    </label>
                </div>
                <div>
                    <label> Password
                        <TextInput
                            name="password"
                            type='password'
                            placeholder='Password'
                            onChange={passwordField}
                        />
                    </label>
                </div>
                <button to='/profile'>Login</button>
            </form>
        </div>
    )
}

export default SignIn