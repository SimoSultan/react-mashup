import React, { Fragment } from 'react'
import { Typography, Button, TextField } from '@material-ui/core';

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}
class BrowserFeatures extends React.Component {

  constructor() {
    super()
    this.state = {
      text: 'testing',
      input: '',
      geo: 'empty',
    }
  }

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.state.text);
  }

  
  pasteToTextField = () => {
    navigator.clipboard.readText().then(clipText => this.setState({input: clipText}));
  }

  getGeoLocation = () => {
      navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  }

  success = (pos) => {
    const crd = pos.coords;
    this.setState({geo: `Your current position is: Latitude : ${crd.latitude}, Longitude: ${crd.longitude}, More or less ${crd.accuracy} meters.`})
  }
  
  error = (err) => {
    console.error(`ERROR(${err.code}): ${err.message}`);
  }

  render() {
    const { text, input, geo } = this.state

    return (
      <Fragment>
        <Typography variant="h4">Browser Features</Typography>

        <Typography variant="body1">{text}</Typography>
        <Button variant="contained" color="secondary" onClick={this.copyToClipboard}>Copy This</Button>

        <TextField variant="outlined" value={input} placeholder="ready for pasting" style={{marginTop: '5%'}} />
        <Button variant="contained" color="secondary" onClick={this.pasteToTextField}>Paste from clipboard</Button>

        <Typography variant="body1" style={{marginTop: '5%'}}>{geo}</Typography>
        <Button variant="contained" color="secondary" onClick={this.getGeoLocation}>Get Geo</Button>

      </Fragment>
    )
  }
}


export default BrowserFeatures