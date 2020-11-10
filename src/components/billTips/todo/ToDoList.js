import React, { useState, useEffect }  from 'react'
import ToDoListItem from './ToDoListItem'
import AddItemToList from './AddItemToList'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';


function ToDoList() {
  
    const [items, setItems] = useState([])


    function handleInputItem(task) {
        if (task === "") return (alert('Please include a task'))
        if (items.includes(task)) return (alert("That task already exists."))
        const tempArray = [...items, task]
        setItems(tempArray)
    }

    function handleRemove(text) {
		const newList = items.filter((item) => item !== text);
		setItems(newList);
	}

	function updateList() {
		console.log(items)
		let toDoItems = []

		if (items.length < 1) {
			toDoItems = [<Typography variant="body1">No tasks to display</Typography>]
		} 
		else {
			toDoItems = items.map((item, index) => (
				  <ToDoListItem key={index.toString()} text={item} handleRemove={handleRemove} />
			))
		}
		return toDoItems
	}

    return (
		<Container>
			<List>
				{updateList()}
			</List>
			<AddItemToList handleInputItem={handleInputItem}/>
		</Container>
    )
}


export default ToDoList