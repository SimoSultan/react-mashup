import React from 'react'
import ExerciseNav from './ExercsiseNav'
import NewExercise from './NewExercise'
import ViewExercise from './ViewExercise'
import AllExercises from './AllExercises'
import EditExercise from './EditExercise'
import ExerciseLogin from './ExerciseLogin'
import ExerciseTrackerContext from './ExerciseTrackerContext'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function ExerciseTracker() {

    return (
        <ExerciseTrackerContext>

            <Router>

                <ExerciseNav />

                <Container>
                    <Typography variant="h2" style={{textAlign: 'center'}}>Exercise Tracker</Typography>
                </Container>

                <Switch>
                    <Route exact path="/exercises/login" component={ExerciseLogin} />
                    <Route exact path="/exercises" component={AllExercises} />
                    <Route exact path="/exercises/new" component={NewExercise} />
                    <Route exact path="/exercises/:id" component={ViewExercise} />
                    <Route exact path="/exercises/edit/:id" render={(props) => <EditExercise props={props} />}/>
                </Switch>

            </Router>

        </ExerciseTrackerContext>
    )
}

export default ExerciseTracker
