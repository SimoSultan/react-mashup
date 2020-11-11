import React, { useState } from 'react'
// import { twootsJSON } from  './twoots.json';

import CreateTwoot from './create/CreateTwoot'
import ShowAllTwoots from './showAll/ShowAllTwoots'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles } from '@material-ui/core';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: 'center',
        marginTop: '3%',
    }
}))

function Tweetter() {
    const classes = useStyles()
    const [twoots, setTwoots] = useState([])

    function handleTwootSubmit(twootInput) {
        // TODO get the date time here as well 
        setTwoots([...twoots, twootInput])
    }

    function handleTwootDelete(twootId) {
        let reducedTwoots = twoots.filter((t) => t.id !== twootId)
        setTwoots(reducedTwoots)
    }

    function handleCommentSubmit(id, commentObj) {
        const index = twoots.findIndex((tw) => tw.id === id)
        let allTwoots = [...twoots]
        allTwoots[index].comments.push(commentObj)
        setTwoots(allTwoots)
    }

    function handleUpdateTwootMsg(id, updateMsg) {
        const index = twoots.findIndex((tw) => tw.id === id)
        let allTwoots = [...twoots]
        allTwoots[index].msg = updateMsg
        setTwoots(allTwoots)
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/tweetter" />
            </Switch>

            <Typography variant="h2" className={classes.heading}>Tweetter</Typography>

            <Container>
                <Grid container>

                    <Grid 
                        item 
                        xs={5} 
                        container 
                        direction="column" 
                        justify="flex-start" 
                        alignItems="center"
                    >
                        <CreateTwoot twootsLength={twoots.length} handleTwootSubmit={handleTwootSubmit}/>
                    </Grid>

                    <Grid 
                        item 
                        xs={7} 
                        container 
                        direction="column" 
                        justify="flex-start" 
                        alignItems="center"
                    >
                        <ShowAllTwoots 
                            allTwoots={twoots} 
                            handleCommentSubmit={handleCommentSubmit} 
                            handleTwootDelete={handleTwootDelete} 
                            handleUpdateTwootMsg={handleUpdateTwootMsg}
                        />
                    </Grid>
                </Grid>
            </Container>

        </Router>
    )
}

export default Tweetter
