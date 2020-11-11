import React from 'react'

import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    commentMsg: {
        marginTop: '3%',
        textAlign: 'left',
    },
    commentName: {
        textAlign: 'left',
        fontWeight: 'bold',
    },
    commentDate: {
    },
}))




function TwootComment( {comment} ) {
    const classes = useStyles()
    let { name, msg, dateTime } = comment

    return (
        <Grid container direction="column" justify="space-around" alignItems="center">

            <Grid item container justify="flex-start">
                <Typography variant="body1" className={classes.commentMsg}>
                    {msg}
                </Typography>
            </Grid>

            <Grid item container justify="space-between">

                <Typography variant="subtitle1" className={classes.commentName}>
                    Submitted by: {name}
                </Typography>

                <Typography variant="body1" className={classes.commentDate}>
                    Submitted at: {dateTime}
                </Typography>
            </Grid>

        </Grid>
    )
}

export default TwootComment
