import React from 'react'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    marginTop: '5%',
  },
  totalCont: {
    margin: '3% 0'
  },
  totalText: {
  },
}))


function Total({tip, bill}) {
  const classes = useStyles()

  function calculateTotal() {
    let calculatedValue = bill + bill * tip
    calculatedValue = calculatedValue.toFixed(2)
    return calculatedValue
  }


  return (
    <Container>
      <Typography variant="h3" className={classes.heading}>Total</Typography>
      <Grid container justify="space-around" alignItems="center" className={classes.totalCont} >
        <Typography variant="body1" className={classes.totalText}>Your total bill comes to...</Typography>
        <Typography variant="h6" className={classes.totalMoney}>${calculateTotal()}</Typography>
      </Grid>
    </Container>
  )
}

export default Total