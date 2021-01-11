import React, {useState, useEffect} from 'react'
import {__GetGoals, __DeleteGoal } from '../../services/GoalServices'
import GoalUpdate from './GoalUpdate'
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import {
    GoalContainer,
    GoalCard,
    GoalP,
    GoalH2,
    GoalNum
    } from './GoalElements'

const Goal = (props) => {
    // console.log("MAIN GGGGGGGOALprops", props)
    const {goal} = props
    console.log("MAIN GGGGGGGOALprops", goal)
    const [goals, setGoals] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(!show);
  

    const getGoals = async () => {
        // e.preventDefault()
        try {
            const getGoal = await __GetGoals(goal)
            // console.log("ACOMM from GetACCOMS", accom)
            setGoals(getGoal)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getGoals()
    }, [])

    const deleteAccom = async (e) => {
        console.log("DELETE ACCOM", goal)
        e.preventDefault()
        try {
            await __DeleteGoal(props.goal.id)
        } catch (error) {
            throw error
        }
    }
    return ( goal ? (
        <GoalContainer>
            <GoalCard > 
            <GoalH2 onClick={handleShow} >{goal.title}</GoalH2>
            <GoalP onClick={handleShow} >{goal.description}</GoalP>
            <GoalNum onClick={handleShow} >{goal.rating}</GoalNum>
            <button
                onClick={(e) => deleteAccom(e)}>
                    <FaTrash />
            </button>
                <div onClick={handleShow}>
            </div>
                {show ? <GoalUpdate  goal={goal} /> :
                null }
            </GoalCard>
            </GoalContainer>
    ) : (
        <h1>{null}</h1>
    )
    )
}


export default Goal
