import React, { useState } from 'react'

import TwootComments from './TwootComments'
import TwootInfo from './TwootInfo'
import TwootCommentInteraction from './TwootCommentInteraction'
import TwootEditDelete from './TwootEditDelete'

import Paper from '@material-ui/core/Paper';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading: {
        marginTop: '3%',
        width: '100%',
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),

        },
        marginBottom: '4%',
    },
    listItem: {
        padding: '3%',
    },
    twootInteraction: {
        marginTop: '6%',
    },
}))

function Twoot({ twoot, handleCommentSubmit, handleTwootDelete, handleUpdateTwootMsg }) {
    const classes = useStyles()
    const [showCommentCont, setShowCommentCont] = useState(false)

    let {msg, name, comments, dateTime } = twoot


    
    return (

        <Paper className={classes.paper}>
            <Grid container direction="column" justify="space-around" alignItems="center" className={classes.listItem}>

                <TwootInfo msg={msg} name={name} dateTime={dateTime} />

                <TwootEditDelete twootId={twoot.id} twootMsg={msg} showCommentCont={showCommentCont} setShowCommentCont={setShowCommentCont} handleTwootDelete={handleTwootDelete} handleUpdateTwootMsg={handleUpdateTwootMsg} />

                {
                    showCommentCont
                    ?   <TwootCommentInteraction 
                            handleCommentSubmit={handleCommentSubmit}
                            handleTwootDelete={handleTwootDelete}
                            twootId={twoot.id}
                            className={classes.twootInteraction}
                        />
                    : ''
                }
 

                <TwootComments comments={comments} />

            </Grid>
        </Paper>
    )
}

export default Twoot
