import React from 'react'
import Goal from './Goal'
import {GoalWrapper} from './GoalElements'

const GoalList = (props) => {

    const {goal} = props.user
    console.log("GGGGGGGoals ", goal) 

    if (goal !== null && goal !== undefined && goal.length > 0) {
    return (
        <GoalWrapper>
            {goal.map((goal, index) => {
                return (
                    <Goal
                        goal={goal}
                        key={index}
                    />
                )
            })
            }
        </GoalWrapper>
    )
} else {
    return null
}
}

export default GoalList
