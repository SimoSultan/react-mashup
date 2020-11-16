import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useExerciseContext } from './ExerciseTrackerContext'
import { ACTIONS } from '../../config/stateReducer'
import Container from '@material-ui/core/Container';



function EditExercise( { exercise, props } ) {

    let { id } = useParams()
 
    const {state, dispatch} = useExerciseContext()
    const [value, setValue] = useState(getExercise().value)

    function getExercise() {
        return state.exercises[id-1]
    }

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleUpdate(e) {
        e.preventDefault()
        dispatch({type: ACTIONS.UPDATE_EXERCISE, payload:{ value, id }})
        console.log(value);
    }
    
    return (
        <Container>
            <h1>Edit Exercise</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" value={value} onChange={handleChange}/>
                <input type="submit" value="Update Exercise" />
            </form>
        </Container>
    )
}

export default EditExercise
