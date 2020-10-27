import React, { Fragment } from 'react'
import { Typography, Button } from '@material-ui/core';

class BrowserFeatures extends React.Component {

  constructor() {
    super()
    this.state = {
      text: 'hello'
    }
  }

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.state.text);
  }

  render() {
    const { text } = this.state

    return (
      <Fragment>
        <Typography variant="h4">Browser Features</Typography>
        <Typography variant="body1">{text}</Typography>
        <Button variant="contained" color="secondary" onClick={this.copyThis}>Copy This</Button>
      </Fragment>
    )
  }
}


export default BrowserFeatures