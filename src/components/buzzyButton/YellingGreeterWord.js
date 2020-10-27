import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core';

class YellingGreeterWord extends React.Component {

  constructor() {
    super()
    this.state = {msg: null}
  }

  static getDerivedStateFromProps = (newProps) => {
    return {
      msg: newProps.message
    }
  }

  render() {
    const { msg } = this.state
    return (
      <Fragment>
        <Typography variant="h1">{msg.toUpperCase()}</Typography>
      </Fragment>
    )
  }
}

export default YellingGreeterWord

// If you need to perform a side effect (for example, data fetching or an animation) in response to a change in props, use componentDidUpdate lifecycle instead.
// If you want to re-compute some data only when a prop changes, use a memoization helper instead.
// If you want to “reset” some state when a prop changes, consider either making a component fully controlled or fully uncontrolled with a key instead.