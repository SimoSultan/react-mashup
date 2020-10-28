import React from 'react'
import { Container, List, ListItem, ListItemText, ListItemIcon, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import MovieIcon from '@material-ui/icons/Movie';
import DeleteIcon from '@material-ui/icons/Delete';

function MovieList({ movies, handleMovieRemove }) {

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }

  function removeMovie(movie) {
    handleMovieRemove(movie)
  }

  let itemList = []

  if (movies.length < 1) {
    itemList = <ListItem key="none">
      <ListItemText primary="You have no movies in your list." />
    </ListItem>
  } else {
    itemList = movies.map(element => (

      <ListItem key={element}>
        <ListItemIcon>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary={element.split(' ').map(e => (e.capitalize())).join(' ')} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => removeMovie(element)}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))
  }

  return (
    <Container>
      <List>
        {itemList}
      </List>
    </Container>
  )
}


export default MovieList

