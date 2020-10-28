import React, { useState } from 'react'
import { Button, Grid, Input } from '@material-ui/core'

function MovieInput({ handleMovieSubmit }) {

  const [movie, setMovie] = useState('')

  function handleChange(event) {
    event.preventDefault()
    setMovie(event.target.value)
  }

  function handleSubmit() {
    handleMovieSubmit(movie)
    setMovie('')
  }



  return (
    <Grid container direction="column" justify="center" alignItems="center" spacing={2} style={{paddingTop: '3%'}}>
      <Grid item>
        <Input type="text" value={movie} placeholder="Type a movie" onChange={handleChange} />
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>Submit Movie</Button>
      </Grid>
    </Grid>
  )
}


export default MovieInput