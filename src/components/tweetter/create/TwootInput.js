import React from 'react'

import { Button, Grid, makeStyles, TextField, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
        },
        margin: '2% 0',
        width: '100%'
    },
    twootTextField: {
        height: '50px',
        width: '100%',
    },
    twootSubmitButton: {
        marginTop: '5%'
    },
    createTwootNameButton: {
        marginTop: '5%',
    },

}))

function TwootInput( { twootInput, nameInput, handleUserInput, handleNameInput, handleSubmit } ) {
    const classes = useStyles()

    return (
        <Paper className={classes.paper}>

            <Grid container direction="column" >

                <Grid item className={classes.twootTextField}>
                    <TextField 
                        variant="outlined" 
                        label="Write a Twoot" 
                        value={twootInput} 
                        onChange={handleUserInput}
                        fullWidth
                        style={{maxHeight: '95px'}}
                    />
                </Grid>

                <Grid item container justify="space-around" className={classes.createTwootNameButton}>

                    <Grid item>
                        <TextField 
                            label="Your Name" 
                            value={nameInput} 
                            onChange={handleNameInput}
                            fullWidth
                            className={classes.nameInput}
                        />
                    </Grid>

                    <Grid item>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={handleSubmit}
                            className={classes.twootSubmitButton}
                        >
                            Submit Twoot
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
            
        </Paper>
    )
}

export default TwootInput
