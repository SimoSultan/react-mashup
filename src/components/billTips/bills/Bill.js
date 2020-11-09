// import React, { useState, useEffect, useCallback }  from 'react'
import React, { useState }  from 'react'
import BillSection from './BillSection'
import Tip from './Tip'
import Total from './Total'

import Paper from '@material-ui/core/Paper';
import {  makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  receipt: {
    width: '100%',
    marginTop: '5%',
  },
}))


function Bill() {
  const classes = useStyles()
  const [allItemsTotal, setAllItemsTotal] = useState(0)
  const [tip, setTip] = useState(0)

  const calculateItems = (totalOfItems) => {
    setAllItemsTotal(totalOfItems)
  }

  return (
    <Paper className={classes.receipt}>
      <BillSection allItemsTotal={allItemsTotal} calculateItems={calculateItems} />
      <Tip setTip={setTip} />
      <Total tip={tip} bill={allItemsTotal} />
    </Paper>
)
}

export default Bill