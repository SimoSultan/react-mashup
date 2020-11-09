import React, { useState } from 'react'

import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';

function AddItemToList( { handleInputItem } ) {
  const [task, setTask] = useState('')

  function handleChange(event) {
    event.preventDefault()
    setTask(event.target.value)
  }

  return (
    <Grid container justify="space-evenly" alignItems="center">
      <TextField variant="outlined" label="New Task" value={task} onChange={handleChange}/>
      <Button variant="contained" color="primary" onClick={() => {handleInputItem(task); setTask('')}}>Add</Button>
    </Grid>
  )
}


export default AddItemToList