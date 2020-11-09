import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
  },
  tipCont: {
    marginTop: '3%'
  }
}))

function Tip({setTip}) {
  const classes = useStyles()

  function handleChange(event) {
    setTip(event.target.value / 100)
  }

  return (
    <Grid container justify="space-around" alignItems="center" className={classes.tipCont}>
      <Typography variant="h4" className={classes.heading}>Tip</Typography>
      <TextField variant="outlined" label="%" type="number" onChange={handleChange}/>
    </Grid>
  )
}

export default Tip