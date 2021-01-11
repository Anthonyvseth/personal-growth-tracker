import React, {useState} from 'react'
import { __GetGoals } from '../../services/GoalServices'
import  GoalForm  from './GoalForm'
import GoalList from './GoalList'
import Goal from './Goal'
import {GoalHeader, GoalH1} from './GoalElements'

const Goals = (props) => {
    const {user} = props
    // console.log("GOALLLLLS user-props", user)
    const [show, setShow] = useState(true)

    return (
        <GoalHeader>
            <GoalForm 
                {...props}
                user={user}
            />
            {' '}
            <GoalList
                {...props}
                user={user}
            />
            <Goal
                {...props}
                user={user}
            />
        </GoalHeader>
    )
}

export default Goals
