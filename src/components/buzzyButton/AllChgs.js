import React from 'react'
import YellingGreeter from './YellingGreeter'
import Buzzy from './Buzzy'
import CookieClicker from './CookieClicker'
import BrowserFeatures from './BrowserFeatures'
import { Grid } from '@material-ui/core';

const mainGrid = {
  textAlign: "center",
  marginTop: '5%',
}

const rowGrid = {
  marginBottom: '5%',
}


class AllChgs extends React.Component {
 
  render() {

 
    return (

      <Grid container direction="column" alignItems="center" style={mainGrid}>

        {/* FIRST ROW */}
        <Grid container item spacing={8} xs={10} style={rowGrid}>

          {/* LEFT TOP */}
          <Grid container item direction="column" xs={6}>
            <Buzzy />
          </Grid>

          {/* RIGHT TOP */}
          <Grid container item direction="column" xs={6}>
            <YellingGreeter />
          </Grid>

        </Grid>

        {/* SECOND ROW */}
        <Grid container item spacing={8} xs={10} style={rowGrid}>

          {/* LEFT BOTTOM */}
          <Grid container item direction="column" xs={6}>
            <CookieClicker />
          </Grid>

          {/* RIGHT BOTTOM */}
          <Grid container item direction="column" xs={6}>
            <BrowserFeatures />
            
          </Grid>

        </Grid>

      </Grid>
    );
  }
}

export default AllChgs