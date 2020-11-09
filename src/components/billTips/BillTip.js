// import React, { useState, useEffect, useCallback }  from 'react'
import React from 'react'
import Bill from './bills/Bill'
import ToDo from './todo/ToDo'

import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    textAlign: "center",
    marginTop: '5%',
  },
  rowGrid: {
    marginBottom: '5%',
  },
}))


function BillTip() {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h2" style={{textAlign:"center"}}>Bills Tips</Typography>

      <Grid container direction="column" alignItems="center" className={classes.mainGrid}>

        <Grid container item spacing={8} xs={10} className={classes.rowGrid}>

          {/* LEFT TOP */}
          <Grid container item direction="column" xs={6}>
            <Bill />
          </Grid>

          {/* RIGHT TOP */}
          <Grid container item direction="column" xs={6}>
            <ToDo />
          </Grid>

        </Grid>

        <Grid container item spacing={8} xs={10} className={classes.rowGrid}>

          {/* LEFT BOTTOM */}
          <Grid container item direction="column" xs={6}>
          </Grid>

          {/* RIGHT BOTTOM */}
          <Grid container item direction="column" xs={6}>
          </Grid>

        </Grid>

      </Grid>
    </>

  )
}

export default BillTip