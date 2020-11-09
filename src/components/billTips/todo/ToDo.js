import React from 'react'
import ToDoList from './ToDoList'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function ToDo() {
  return (
    <Container>
      <Typography variant="h3">Your To Do List</Typography>
      <ToDoList />
    </Container>
  )
}

export default ToDo