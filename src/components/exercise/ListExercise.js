import React from 'react'
import {Button, Grid, Typography} from '@material-ui/core'
import { useExerciseContext } from './ExerciseTrackerContext'
import { ACTIONS } from '../../config/stateReducer'


import { Link } from "react-router-dom";


function ListExercise( { exercise } ) {

    const { dispatch } = useExerciseContext()


    function handleDelete(id) {
        dispatch({type: ACTIONS.REMOVE_EXERCISE, payload:{ id }})
    }
    
    return (
        <Grid container justify="space-around" alignItems="center">
            <Typography variant="body1">ID: {exercise.id }</Typography>
            <Typography variant="body1">Value: {exercise.value }</Typography>
            <Button variant="outlined" color="primary">
                <Link to={`/exercises/edit/${exercise.id}`}>Edit</Link>
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(exercise.id)}>Delete</Button>
        </Grid>
    )
}

export default ListExercise
