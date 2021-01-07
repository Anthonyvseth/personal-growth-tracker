import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import SignUp from './SignUp'
import SignIn from './SignIn'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import { __getUser } from '../services/UserServices'

const Router = () => {
    const [user, setUser] = useState(null)
    const [needsRefresh, setNeedsRefresh] = useState(false)

    const localUserId = localStorage.getItem('user_id')

    const gettingUser = async (user_id) => {
        console.log(user_id)
        try {
            const person = await __getUser(parseInt(localUserId))
            setUser(person)
            return person
        } catch (error) {
            throw error
        }
    }

    if((user === null && localUserId !== null) || needsRefresh) {
        setNeedsRefresh(false)
        const gotUser = gettingUser(localUserId)
        setUser(gotUser)
    }

    const clearUser = () => {
        setUser(null);
    };


    return (
        <main>
            <Switch>
                <Route exact path='/' component={() => <HomePage />} />
                <Route path='signin' component={(props) => <SignIn {...props} setAccount={setUser}/>} />
                <Route path='/signup' component={(props) => <SignUp {...props} setUser={setUser}/>}/>
                <ProtectedRoute 
                    authenticated={user !== null}
                    path='/profile' 
                    component={(props) => 
                    <ProfilePage 
                        {...props}
                        user={user} 
                        onClickSignOut={clearUser}
                        setNeedsRefresh={setNeedsRefresh}
                        />} />
            </Switch>
        </main>
    )
}

export default Router 

