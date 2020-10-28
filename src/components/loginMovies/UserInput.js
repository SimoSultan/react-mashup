import React from 'react'
import { Button, Grid, TextField } from '@material-ui/core';

class UserInput extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleSubmit = () => {
    let { text } = this.state
    alert(`You typed: ${(text == '') ? "Nothing..." : text}`)
  }

  render() {
    const { text } = this.state
    return (
      <Grid container style={{paddingTop: '4%'}} justify="space-around" alignItem="center">
        <TextField id="default-input" value={ text } label="input something here" variant="outlined" onChange={this.handleChange}/>
        <Button variant="outlined" color="primary" size="large" onClick={this.handleSubmit}>Submit</Button>
      </Grid>
    )
  }
}

export default UserInput