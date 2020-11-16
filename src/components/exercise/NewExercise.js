import React, { useState } from 'react'
import { useExerciseContext } from './ExerciseTrackerContext'
import { ACTIONS } from '../../config/stateReducer'

import Container from '@material-ui/core/Container';


function NewExercise() {

    const {state, dispatch} = useExerciseContext()
    const [value, setValue] = useState('')
    
    const getNextId = () => {
        return state.exercises.length + 1
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_EXERCISE, payload:{ value, id: getNextId() }})
        setValue('')
    }

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <Container>
            <h1>New Exercise</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <input type="submit" value="Submit Exercise" />
            </form>
        </Container>
    )
}

export default NewExercise
