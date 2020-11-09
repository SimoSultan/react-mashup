import React, { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cont: {
    paddingTop: '2%',
  },
}))

function BillItem({ item, allItemsTotal, calculateItems }) {
  const classes = useStyles()
  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0)

  function handleItemPriceChange(event) {
    event.preventDefault()
    setPrice(event.target.value)
  }

  function handleItemQtyChange(event) {
    event.preventDefault()
    setQty(event.target.value)
  }

  useEffect(() => {
    console.log('bill item use effect');
    let calculatedValue = allItemsTotal + (price * qty)
    calculateItems(calculatedValue)
    // eslint-disable-next-line
  }, [price, qty])
  

  
  return (
    <Grid container justify="space-around" alignItems="center" className={classes.cont}>
      <TextField variant="outlined" label="QTY" type="number" onChange={handleItemQtyChange} />
      x
      <Typography variant="body1" className={classes.item}>
        {item}
      </Typography>
      <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={handleItemPriceChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
            type="number"
          />
        </FormControl>
    </Grid>
  )
}

export default BillItem