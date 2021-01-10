import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import SignUp from './SignUp'
import SignIn from './SignIn'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import { __getUser } from '../services/UserServices'
import Accomplishment from './accomplishments/Accomplishment'

const Router = () => {
    const [user, setUser] = useState({})

    const localUserId = localStorage.getItem('user_id')

    const gettingUser = async (user_id) => {
        try {
            const person = await __getUser(parseInt(localUserId))
            console.log("PERSON ", person)
            setUser(person)
            return person
        } catch (error) {
            throw error
        }
    }

    if((user === null && localUserId !== null)) {
        const gotUser = gettingUser(localUserId)
        setUser(gotUser)
    }

    const clearUser = () => {
        setUser({});
    };


    return (
        <main>
            <Switch>
                <Route exact path='/' component={() => <HomePage />} />
                <Route path='/signin' component={(props) => <SignIn {...props} setUser={setUser}/>} />
                <Route path='/signup' component={(props) => <SignUp {...props} setUser={setUser}/>}/>
                <ProtectedRoute 
                    authenticated={user !== null}
                    path='/profile' 
                    component={(props) => 
                    <ProfilePage 
                        {...props}
                        user={user} 
                        onClickSignOut={clearUser}
                    
                        />} />
            </Switch>
        </main>
    )
}

export default Router 

