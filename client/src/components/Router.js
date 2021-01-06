import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import SignUp from '../pages/SignUpPage'
import HomePage from '../pages/HomePage'
import { __getUser } from '../services/UserServices'

const Router = () => {
    const [user, setUser] = useState(null)
    const [needsRefresh, setNeedsRefresh] = useState(false)

    const localUserId = localStorage.getItem('user_id')

    const gettingUser = async (user_id) => {
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
                <Route exact path='/' 
                        component={(props) => 
                    <HomePage 
                        {...props}
                        user={user} 
                        onClickSignOut={clearUser}
                        setNeedsRefresh={setNeedsRefresh}
                        />} />
                <Route path='/signup' component={(props) => <SignUp {...props} setUser={setUser}/>}/>
            </Switch>
        </main>
    )
}

export default Router 

