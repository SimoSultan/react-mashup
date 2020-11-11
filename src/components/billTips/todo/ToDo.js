import React from 'react'
import ToDoList from './ToDoList'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function ToDo() {
  return (
    <Paper style={{padding: '5%'}}>
        <Typography variant="h3">Your To Do List</Typography>
        <ToDoList />
    </Paper>
  )
}

export default ToDo