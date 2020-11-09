import React, { Fragment } from 'react'
import Login from './login/Login'
import Movies from './movies/Movies'
import DynamicForm from './dynamicInput/DynamicForm'
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const mainGrid = {
  textAlign: "center",
  marginTop: '5%',
}

const rowGrid = {
  marginBottom: '5%',
}


class LoginMovieChg extends React.Component {

  render() {
    return (
      
      <Fragment>

        <Typography variant="h2" style={{textAlign:"center"}}>LoginMovieChg</Typography>

        <Grid container direction="column" alignItems="center" style={mainGrid}>

          {/* FIRST ROW */}
          <Grid container item spacing={8} xs={10} style={rowGrid}>

            {/* LEFT TOP */}
            <Grid container item direction="column" xs={6}>
              <Login />
            </Grid>

            {/* RIGHT TOP */}
            <Grid container item direction="column" xs={6}>
              <Movies />
            </Grid>

          </Grid>

          {/* SECOND ROW */}
          <Grid container item spacing={8} xs={10} style={rowGrid}>

            {/* LEFT BOTTOM */}
            <Grid container item direction="column" xs={6}>
              <DynamicForm />
            </Grid>

            {/* RIGHT BOTTOM */}
            <Grid container item direction="column" xs={6}>
            </Grid>

          </Grid>

        </Grid>
      </Fragment>
    )
  }
}

export default LoginMovieChg