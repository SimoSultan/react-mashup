import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    twootMsg: {

    },
    twootName: {
        fontWeight: 'bold',
    },
    twootDate: {
        
    }
}))


function TwootInfo( { msg, name, dateTime } ) {
    const classes = useStyles()

    return (
        <>
            {/* MSG */}
            <Grid item container justify="flex-start" xs={12}>
                <Typography variant="body1" className={classes.twootMsg}>
                    {msg}
                </Typography>
            </Grid>


            {/* NAME AND DATE */}
            <Grid item xs={12} container justify="space-between" alignItems="center">

                <Grid item >
                    <Typography variant="subtitle1" className={classes.twootName}>
                        Submitted by: {name}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body2" className={classes.twootDate}>
                        Submitted at: {dateTime}
                    </Typography>
                </Grid>

            </Grid>
        </>
    )
}

export default TwootInfo
