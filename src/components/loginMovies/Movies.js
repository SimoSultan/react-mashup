import React, { Fragment } from 'react'
import MovieList from './MovieList'
import Typography from '@material-ui/core/Typography';
import MovieInput from './MovieInput';

class Movies extends React.Component {

  constructor() {
    super()
    this.state = {
      movieArray: ['dark knight', 'test']
    }
  }

  handleMovieSubmit = (movie) => {
    let { movieArray } = this.state
    if(movieArray.includes(movie)) {
      alert('This movie already exists in your list.')
    } else if(movie === "") {
      alert('Please ensure input is not empty.')
    } else {
      this.setState({movieArray: movieArray.concat(movie)})
    }
  }

  handleMovieRemove = (movie) => {
    console.log(movie);
    console.log(movie);
    let { movieArray } = this.state
    movie = movie.toLowerCase()
    
    const index = movieArray.indexOf(movie);
    console.log(index);
    movieArray.splice(index, 1);
    console.log(movieArray);

    this.setState({movieArray: movieArray})
  }

  render() {
    const { movieArray } = this.state

    return (
        <Fragment>
          <Typography variant="h4">Movies List</Typography>
          <MovieInput handleMovieSubmit={this.handleMovieSubmit} />
          <MovieList movies={movieArray} handleMovieRemove={this.handleMovieRemove}/>
        </Fragment>
      )
  }
}

export default Movies