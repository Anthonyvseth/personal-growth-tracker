import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import SignUp from './SignUp'

const Router = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={() => <SignUp />} />
            </Switch>
        </main>
    )
}

export default Router 

