import React, { useState, useEffect }  from 'react'
import ToDoListItem from './ToDoListItem'
import AddItemToList from './AddItemToList'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';


function ToDoList() {

  const [items, setItems] = useState([])
  let toDoItems = []



  function handleInputItem(task) {
    setItems(items.concat(task))
  }

  function removeItemFromList(text) {
    console.log(text);
    let tempArray = items
    console.log(tempArray);
    const index = tempArray.indexOf(text);
    console.log(index);
    tempArray.splice(index, 1);
    console.log(tempArray);

    setItems(tempArray)
  }

  useEffect(() => {
    if (items.length < 1) {
      toDoItems.push(<Typography variant="body1">No tasks to display</Typography>)
    } 
    else {
      toDoItems = items.map((item, index) => (
        <ToDoListItem key={`item-${index}`} text={item} removeItemFromList={removeItemFromList} />
      ))
    }
  }, [items])

  return (
    <Container>
      <List>
        {toDoItems}
      </List>
      <AddItemToList handleInputItem={handleInputItem}/>
    </Container>
  )
}


export default ToDoList