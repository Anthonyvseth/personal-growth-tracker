import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import SignUp from '../components/signin/SignUp'
import SignIn from '../components/signin/SignIn'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import { __getUser } from '../services/UserServices'
import Accoms from '../components/accomplishments/Acomms'

const Router = () => {
    const [user, setUser] = useState(null)

    const localUserId = localStorage.getItem('user_id')

    const gettingUser = async (user_id) => {
        try {
            const person = await __getUser(parseInt(localUserId))
            console.log("PERSON", person)
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
        setUser(null);
    };


    return (
        <main>
            <Switch>
                <Route exact path='/' component={() => <HomePage />} />
                <Route path='/signin' component={(props) => <SignIn {...props} setUser={setUser} user={user}/>} />
                <Route path='/signup' component={(props) => <SignUp {...props} setUser={setUser}/>}/>
                <ProtectedRoute 
                    authenticated={user !== null}
                    path='/accomplishments' 
                    component={(props) => 
                    <Accoms
                        {...props}
                        user={user} 
                        setUser={setUser}
                        onClickSignOut={clearUser}
                    
                        />} />
                <ProtectedRoute 
                    authenticated={user !== null}
                    path='/profile' 
                    component={(props) => 
                    <ProfilePage 
                        {...props}
                        user={user} 
                        setUser={setUser}
                        onClickSignOut={clearUser}
                    
                        />} />
            </Switch>
        </main>
    )
}

export default Router 

