import React, {useState} from 'react'

const SignUp = (props) => {
    const [username, setUserame] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');





    return (
        <div>
            <h1>Get started today!</h1>
                <div>
                    <label>Username</label>
                        <input 
                        type = 'text'
                        name = 'username'
                        placeholder = 'Enter your username'
                        />
                </div>
                <div>
                    <label>First Name</label>
                        <input 
                        type = 'text'
                        name = 'first name'
                        placeholder = 'Enter your fisrt name'
                        />
                </div>
                <div>
                    <label>Last Name</label>
                        <input 
                        type = 'text'
                        name = 'last name'
                        placeholder = 'Enter your last name'
                        />
                </div>
                <div>
                    <label>Email</label>
                        <input 
                        type = 'text'
                        name = 'email'
                        placeholder = 'Enter your email'
                        />
                </div>
                <div>
                    <label>Password</label>
                        <input 
                        type = 'text'
                        name = 'password'
                        placeholder = 'Enter your password'
                        />
                </div>
                <button>Sign Up</button>
        </div>
    )
}

export default SignUp
