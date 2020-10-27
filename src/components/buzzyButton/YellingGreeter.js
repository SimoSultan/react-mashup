import React, { Fragment } from 'react'
import YellingGreeterWord from "./YellingGreeterWord";
import { Typography, Button, TextField } from '@material-ui/core';

class YellingGreeter extends React.Component {

  constructor() {
    super()
    this.state = {
      msg: "hello",
    }
  }

  updateMsg = () => {
    let message = this.inputRef.value
    this.setState({msg: message})
  }

  render() {
    const { msg } = this.state
    return (
      <Fragment>
        <Typography variant="h4">Yelling Greeter</Typography>
        <TextField label="write a word" variant="outlined" inputRef={ref => { this.inputRef = ref; }} />
        <Button variant="contained" color="secondary" onClick={this.updateMsg} >Update word</Button>
        <YellingGreeterWord message={msg} />
      </Fragment>
    )
  }
}

export default YellingGreeter

// If you need to perform a side effect (for example, data fetching or an animation) in response to a change in props, use componentDidUpdate lifecycle instead.
// If you want to re-compute some data only when a prop changes, use a memoization helper instead.
// If you want to “reset” some state when a prop changes, consider either making a component fully controlled or fully uncontrolled with a key instead.