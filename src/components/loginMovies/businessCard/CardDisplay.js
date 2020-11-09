import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const useStyles = () => ({
  textInputs: {
    padding: '2%',
    fontWeight: 'bold',
  },
  displayInputs: {
    width: '100%',
    textAlign: 'left',
  },
  card: {
    border: '1px solid black', 
    marginTop: '5%', 
    width: '50%',
    margin: '0 auto'
  },
});

class CardDisplay extends React.Component {
  
  render() {
    
    let { firstName, lastName, email, phone, address, postCode, country, classes} = this.props

    return (
      <Grid container direction="column" justify="center" alignItems="flex-start" className={classes.card}>
        <Grid item style={{background: '#6C6C91', width: '100%', color: 'white', padding: '5%'}}>
         <Typography variant="h3">{(firstName || lastName) ? `${firstName} ${lastName}` : ''}</Typography>
        </Grid>
        <Grid item container>
          <Grid item container justify="flex-start" alignItems="center" className={classes.displayInputs}>
            <Typography variant="body1" className={classes.textInputs} >Email: </Typography>
            <Typography variant="body2" >{email}</Typography>
          </Grid>
          <Grid item container justify="flex-start" alignItems="center" className={classes.displayInputs}>
            <Typography variant="body1" className={classes.textInputs}>Phone Number: </Typography>
            <Typography variant="body2" >{phone}</Typography>
          </Grid>
          <Grid item container justify="flex-start" alignItems="center" className={classes.displayInputs}>
            <Typography variant="body1" className={classes.textInputs}>Address: </Typography>
            <Typography variant="body2" >{address}</Typography>
          </Grid>
          <Grid item container justify="space-around" alignItems="center" className={classes.displayInputs}>
            <Grid item container justify="flex-start" alignItems="center" style={{width: '49%', textAlign: 'left'}}>
              <Typography variant="body1" className={classes.textInputs}>Post Code: </Typography>
              <Typography variant="body2" >{postCode}</Typography>
            </Grid>
            <Grid item container justify="flex-start" alignItems="center" style={{width: '49%', textAlign: 'left'}}>
              <Typography variant="body1" className={classes.textInputs}>Country: </Typography>
              <Typography variant="body2" >{country}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}


// CardDisplay.defaultProps = {
//   firstName: "Sandy",
//   lastName: "Doe",
// }

export default withStyles(useStyles)(CardDisplay);