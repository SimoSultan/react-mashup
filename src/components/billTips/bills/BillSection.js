import React from 'react'
import BillItem from './BillItem'

import Typography from '@material-ui/core/Typography';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
  },

}))

function BillSection({allItemsTotal, calculateItems}) {
  const classes = useStyles()

  return (
    <Container>
      <Typography variant="h4" className={classes.heading}>Bill</Typography>
      <BillItem item={'Coffee'} allItemsTotal={allItemsTotal} calculateItems={calculateItems} />
      <BillItem item={'Cake'} allItemsTotal={allItemsTotal} calculateItems={calculateItems} />
    </Container>
  )
}

export default BillSection