import React, { useState }  from 'react'

import Grid from '@material-ui/core/Grid';
import CheckBox from '@material-ui/core/CheckBox';
import Typography from '@material-ui/core/Typography';
import { IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  checked: {
    textDecoration: 'line-through',
    color: 'grey',
  }
}))

function ToDoListItem({ text, handleRemove }) {
  // function ToDoListItem({ text }) {
  const [checked, setChecked] = useState(false)
  const classes = useStyles()


  function handleChange() {
    checked ? setChecked(false) : setChecked(true)
  }


  return(
    <Grid container justify="space-evenly" alignItems="center">
      <Grid item xs={3}>
        <CheckBox 
          checked={checked} 
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1" className={checked ? classes.checked : ''} style={{textAlign: 'left'}}>
          {text}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <IconButton  onClick={() => handleRemove(text)}>
          <DeleteIcon color={checked ? 'disabled' : "secondary"} />
        </IconButton>
      </Grid>
    </Grid>
  )
}


export default ToDoListItem