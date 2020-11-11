import React, { useState } from 'react'

import TwootInput from './TwootInput'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: 'center',
        marginTop: '3%',
    },
}))


function CreateTwoot( {twootsLength, handleTwootSubmit} ) {
    const classes = useStyles()
    const [twootInput, setTwootInput] = useState("")
    const [nameInput, setNameInput] = useState("")

    function handleUserInput(event) {
        event.preventDefault()
        setTwootInput(event.target.value.capitalize())
    }

    function handleNameInput(event) {
        event.preventDefault()
        setNameInput(event.target.value.capitalize())
    }
    
    function handleSubmit() {
        if (twootInput === "") return (alert("Please fill in your Twoot"))
        if (nameInput === "") return (alert("Please fill in your name"))

        let twootObject = { 
            id: ++twootsLength,
            msg: twootInput,
            name: nameInput,
            dateTime: 99,
            comments: []
        }
        handleTwootSubmit(twootObject)
        setTwootInput("")
        setNameInput("")
    }

    return (
        <>

            <Typography variant="h4" className={classes.heading}>
                Create a Twoot
            </Typography>

            <TwootInput 
                twootInput={twootInput} 
                nameInput={nameInput} 
                handleSubmit={handleSubmit} 
                handleUserInput={handleUserInput} 
                handleNameInput={handleNameInput} 
            />

        </>
    )
}

export default CreateTwoot
