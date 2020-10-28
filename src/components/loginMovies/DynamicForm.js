import React, { useState }  from 'react'
import Typography from '@material-ui/core/Typography';
import UserInput from './UserInput'
import AddRemoveInput from './AddRemoveInput'
import { List, ListItem } from '@material-ui/core';

function DynamicForm() {

  const [inputArray, setInputArray] = useState([])

  function handleInputAdd() {
    setInputArray(inputArray.concat(<UserInput />))
    
  }

  function handleInputRemove() {
    if(inputArray.length == 1) {
      setInputArray([])
    } else {
      setInputArray(inputArray.splice(-1, 1))
    }
  }

  const inputList = inputArray.map(element => (
    <ListItem key={inputArray.indexOf(element)}>
      {element}
    </ListItem>
  ))

  return (
    <>
      <Typography variant="h4">Dynamic Form</Typography>
      <UserInput />
      <List>
        {inputList}
      </List>
      <AddRemoveInput handleInputAdd={handleInputAdd} handleInputRemove={handleInputRemove} />
    </>
  )
}


export default DynamicForm