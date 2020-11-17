import React from 'react'

import { useExerciseContext } from './ExerciseTrackerContext'
import ListExercise from './ListExercise'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function AllExercises() {

    const {state} = useExerciseContext()

    
    return (
        <>
            <Typography variant="h3" style={{textAlign: 'center', marginTop: '5%'}}>
                All Exercises
            </Typography>

            <Container>

                {
                    state.exercises.length < 1
                    ? 'No exercises inputted yet'
                    : state.exercises.map((ex,index) => (<ListExercise key={`exercise-${index + 1}`} exercise={ex}/>) )
                }
            </Container>
        </>
    )
}

export default AllExercises