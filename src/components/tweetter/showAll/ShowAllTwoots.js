import React from 'react'

import Twoot from '../showOne/Twoot'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: 'center',
        marginTop: '3%',
    }
}))


function ShowAllTwoots( { allTwoots, handleCommentSubmit, handleTwootDelete, handleUpdateTwootMsg } ) {
    const classes = useStyles()

    return (
        <Container>

            <Typography variant="h4" className={classes.heading}>
                All Twoots
            </Typography>

            <List>
                {
                    (allTwoots.length < 1)
                    ? <Paper style={{padding: '2%'}}><Typography key="default" variant="body1" className={classes.heading}>No Twoots to show</Typography></Paper>
                    : allTwoots.map((twoot) => (
                                        <Twoot 
                                            key={twoot.id} 
                                            twoot={twoot} 
                                            handleCommentSubmit={handleCommentSubmit} 
                                            handleTwootDelete={handleTwootDelete} 
                                            handleUpdateTwootMsg={handleUpdateTwootMsg}
                                        />
                                    ))
                }
            </List>

        </Container>
    )
}

export default ShowAllTwoots
