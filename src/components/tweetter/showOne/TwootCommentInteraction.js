import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { Grid, makeStyles } from '@material-ui/core';

// eslint-disable-next-line
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}


const useStyles = makeStyles((theme) => ({
    twootInteraction: {
        marginTop: '6%',
    },
}))

function TwootCommentInteraction( { twootId, handleCommentSubmit } ) {
    const classes = useStyles()
    const [comment, setComment] = useState("")
    const [commentName, setCommentName] = useState("")

    function handleCommentInput(event) {
        event.preventDefault()
        setComment(event.target.value.capitalize())
    }

    function handleCommenNametInput(event) {
        event.preventDefault()
        setCommentName(event.target.value.capitalize())
    }

    function submitComment() {
        // TODO get the date time here as well 
        if(comment === "") return (alert("Please type a comment in the input provided."))
        if(commentName === "") return (alert("Please type your name for the comment."))

        let commentObj = {
            msg: comment,
            name: commentName,
            dateTime: 100
        }
        handleCommentSubmit(twootId, commentObj)
        setComment('')
        setCommentName('')
    }

    return (
        <Grid container justify="space-evenly" className={classes.twootInteraction}>
            <TextField 
                variant="outlined" 
                label="Comment here" 
                value={comment} 
                onChange={handleCommentInput} 
            />

            <TextField 
                variant="outlined" 
                label="Name" 
                value={commentName} 
                onChange={handleCommenNametInput} 
            />
            
            <Button color="primary" onClick={submitComment}>
                Submit Comment
            </Button>

        </Grid>
    )
}

export default TwootCommentInteraction
