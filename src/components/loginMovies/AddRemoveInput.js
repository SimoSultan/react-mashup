import React from 'react'
import { Button, Grid } from '@material-ui/core';

class AddRemoveInput extends React.Component {
  constructor(props) {
    super(props)
  }

  handleAddInput = () => {
    this.props.handleInputAdd()
  }

  handleRemoveInput = () => {
    this.props.handleInputRemove()
  }

  render() {
    return (
      <Grid container style={{paddingTop: '4%'}} justify="space-around" alignItem="center">
        <Button color="primary" onClick={this.handleAddInput}>Add Input</Button>
        <Button color="secondary" onClick={this.handleRemoveInput}>Remove Input</Button>
      </Grid>
    )
  }

}


export default AddRemoveInput