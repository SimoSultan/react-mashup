import React, { useState } from 'react'
import { Grid, TextField, Button } from '@material-ui/core';

function TwootEdit( { twootId, twootMsg, handleUpdateTwootMsg } ) {

    const [editInput, setEditInput] = useState(twootMsg)

    function handleChange(event) {
        event.preventDefault()
        setEditInput(event.target.value)

    }

    function handleUpdate() {
        handleUpdateTwootMsg(twootId, editInput)
        setEditInput('')
    }

    return (
        <Grid item container justify="space-evenly" alignItems="center">
            <Grid item xs={8}>
                <TextField 
                    variant="outlined" 
                    label="Update Twoot" 
                    value={editInput} 
                    onChange={handleChange} 
                    fullWidth
                />
            </Grid>

            <Grid item >
                <Button color="primary" onClick={handleUpdate}>
                    Update Twoot
                </Button>
            </Grid>

        </Grid>
    )
}

export default TwootEdit
