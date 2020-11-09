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
    if(inputArray.length === 1) {
      setInputArray([])
    } else {
      let array = [...inputArray]
      let index = array.length - 1
      array.splice(index, 1)
      setInputArray(array)
    }
  }

  const inputList = inputArray.map(element => (
    <ListItem key={inputArray.indexOf(element)} style={{padding: '0'}}>
      {element}
    </ListItem>
  ))

  return (
    <>
      <Typography variant="h4">Dynamic Form</Typography>
      <AddRemoveInput handleInputAdd={handleInputAdd} handleInputRemove={handleInputRemove} />
      <UserInput />
      <List >
        {inputList}
      </List>
    </>
  )
}


export default DynamicForm