import React, { Fragment } from 'react'
import { Typography, Button } from '@material-ui/core';

class Buzzy extends React.Component {

  constructor() {
    super()
    this.state = {
      buzz: false,
    }
  }

  buzzBuzz = () => {
    let time = 1000
    this.setState({buzz: true})
    window.navigator.vibrate(time);

    setTimeout(() => {
      this.setState({buzz: false})
    }, time);
  }

  render() {
    const { buzz } = this.state

    return (
      <Fragment>
        <Typography variant="h4">Buzzy Button</Typography>
        <Button variant="contained" color="secondary" size="large" onClick={this.buzzBuzz}>Press me for a buzz</Button>
        <Typography variant="body1" style={{marginTop: '3%'}}>{buzz ? "I'm Buzzing" : ""}</Typography>
      </Fragment>
    )
  }
}


export default Buzzy