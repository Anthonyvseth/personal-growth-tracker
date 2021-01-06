import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import SignUp from '../pages/SignUpPage'
import Home from '../pages/HomePage'

const Router = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={() => <SignUp />} />
                <Route path='/home' component={() => <Home />}/>
            </Switch>
        </main>
    )
}

export default Router 

