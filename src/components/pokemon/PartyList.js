import React, { useState, useEffect } from 'react';
import { capitalize } from './Helpers'
import Pokedex from './Pokedex';

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    width: 330,
  },
  media: {
    height: 300,
    width: 300,
  },
});


export default function PartyList() {

  const classes = useStyles();
  const [party, setParty] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // every time we make a request, set loading state to be true
    setLoading(true)
    let cancel
    // axios can take a 2nd parameter as an object
    // every time axios makes a call, it will set the cancelToken into cancel
    axios.get('http://localhost:4000/pokemon', {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      // when the request is fetched, then set loading state to false
      setLoading(false)
      // this data being passed in from the promise is in the object returned from the server (database)
      setParty(res.data)
      
    })
    // useEffect allows us to return a function which gets called every time useEffect gets called again
    // allows us to cancel previous request every time a new request comes through
    return () => cancel()

    // we pass an array of arguments
    // every time the elements in the array change, it will rerun the effect
    // if we leave it empty, it will only run one single time
    // but putting currentPageUrl in there, if the contents have changed in that url, then re-run the effect
  }, [])

  if (loading) return "Loading..."

  const partyList = party.map(pok => (
  
      <Grid item xs={4}>
        <ListItem key={pok.name}>


          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={`https://pokeres.bastionbot.org/images/pokemon/${pok.pokeId}.png` }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { pok === undefined ? "Name" : capitalize(pok.name)}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* Type1: {capitalize(pok.type1)} */}
                  Type1: 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Type2: 
                  {/* Type2: {capitalize(pok.type2)} */}
                </Typography>
              </CardContent>
              <CardActions>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button size="small" color="primary">Learn More</Button>
                <Button size="small" color="secondary" float="right">Remove From Party</Button>
              </Grid>
              </CardActions>
            </CardActionArea>
          </Card>

        </ListItem>
      </Grid>

  ))


  return (

    <Container>

      <Typography gutterBottom variant="h4">
        My Pokemon Party
      </Typography>

      <List>
        <Grid container direction="row" style={{marginTop: '2%'}}>
          {partyList}
        </Grid>
      </List>

      <Router>
        <Button variant="contained" >
          <Link to="/pokemon">BACK</Link>
        </Button>
        <Route path="/pokemon" exact component={() => <Pokedex />} />
      </Router>

    </Container>

  )
}
 