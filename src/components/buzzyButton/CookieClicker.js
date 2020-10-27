import React, { Fragment } from 'react'
import { Typography, Grid, Button, Badge, Input } from '@material-ui/core';

const buttonStyles = {
  marginTop: '2%',
}

const incrementText = {
  marginTop: '4%',
}


class CookieClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      plus: 0,
      minus: 0,
      count: 0,
      increment: 1,
      interval: 1000,
    }
  }

  plusCounter = () => {
    this.setState({ plus: ++this.state.plus })
    this.setState({ count: this.state.count += this.state.increment })
  }

  minusCounter = () => {
    this.setState({minus: ++this.state.minus})
    this.setState({count: this.state.count -= this.state.increment})
  }

  setIncrement = () => {
    let newIncrement = parseInt(this.incrementRef.value)
    this.setState( {increment: newIncrement } )
    this.incrementRef.value = ""
  }

  setNewInterval = () => {
    let newInterval = parseInt(this.intervalRef.value) * 1000
    this.setState( {interval: newInterval } )
    this.intervalRef.value = ""
  }

  resetInterval = () => {
    this.setState( {interval: 1000 } )
  }

  componentDidMount() {
    this.myTimer = setInterval(() => {
      this.setState({count: this.state.count += this.state.increment})
    }, this.state.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.interval !== this.state.interval) {
      let int = this.state.interval
      if (this.myTimer) {
        clearInterval(this.myTimer)
      }
      this.myTimer = setInterval(() => {
        this.setState({count: this.state.count += this.state.increment})
      }, int);
    }
  }

  render() {
    const { plus, minus, count, increment, interval } = this.state

    return (
      <Fragment>
        <Typography variant="h4">Cookie Clicker</Typography>

        <Typography variant="h1">{ count }</Typography>

        <Grid container spacing={6} justify="center" alignItems="center" style={buttonStyles}>
          <Grid item>
            <Badge badgeContent={plus} color="primary">
              <Button variant="contained" color="default" onClick={this.plusCounter}>Plus</Button>
            </Badge>
          </Grid>
          <Grid item>
            <Badge badgeContent={minus} color ="primary">
              <Button variant="contained" color="default" onClick={this.minusCounter} disabled={increment > count}>Minus</Button>
            </Badge>
          </Grid>
          
        </Grid>

        <Typography variant="subtitle1" style={incrementText}>Increment by: {increment}</Typography>

        <Grid container spacing={2} justify="center" alignItems="center" style={buttonStyles}>
          <Grid item>
            <Input type="number" inputRef={ref => { this.incrementRef = ref }} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={this.setIncrement} >Set New Increment</Button>
          </Grid>
        </Grid>

        <Typography variant="subtitle1" style={incrementText}>Interval: {interval/1000} {(interval/1000) === 1 ? "second" : "seconds"}</Typography>

        <Grid container spacing={2} justify="center" alignItems="center" style={buttonStyles}>
          <Grid item>
            <Input type="number" inputRef={ref => { this.intervalRef = ref }} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={this.setNewInterval} >Set New Interval</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={this.resetInterval} >Reset Interval to 1</Button>
          </Grid>
        </Grid>

      </Fragment>
    )
  }
}

export default CookieClicker

// If you need to perform a side effect (for example, data fetching or an animation) in response to a change in props, use componentDidUpdate lifecycle instead.
// If you want to re-compute some data only when a prop changes, use a memoization helper instead.
// If you want to “reset” some state when a prop changes, consider either making a component fully controlled or fully uncontrolled with a key instead.