import React, { useState, useEffect } from 'react';
import { capitalize } from './Helpers'

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 325,
  },
  media: {
    height: 300,
    width: 300,
    margin: '0 auto'
  },
});


export default function PartyList() {

  const classes = useStyles();
  const [party, setParty] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get('http://localhost:4000/pokemon', {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setParty(res.data)
      
    })
    return () => cancel()
  }, [])


  async function removeFromParty(id) {

    try {
      let res = await axios.delete(`http://localhost:4000/pokemon/${id}`)
      console.log(res.data);
      
      axios.get('http://localhost:4000/pokemon').then(res => {
        // when the request is fetched, then set loading state to false
        setLoading(false)
        // this data being passed in from the promise is in the object returned from the server (database)
        setParty(res.data)
      })

    } catch (error) {
      console.error(error)
    }
  }


  if (loading) return "Loading..."

  const partyList = party.map(pok => (
  
      <Grid item xs={4}>
        <ListItem key={pok.name}>


          <Card className={classes.root}>
            <CardActionArea>

              <CardMedia className={classes.media} image={`https://pokeres.bastionbot.org/images/pokemon/${pok.pokeId}.png` } />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { pok === undefined ? "Name" : `#${pok.pokeId} ${capitalize(pok.name)}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Type1: {capitalize(pok.type1)}
                  {/* Type1:  */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* Type2:  */}
                  Type2: {capitalize(pok.type2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Button size="small" color="primary">
                    <Link to={`/pokemon/show/${pok.pokeId}`}>Learn More</Link>
                  </Button>
                  <Button size="small" color="secondary" float="right" onClick={() => removeFromParty(pok.pokeId)}>Remove From Party</Button>
                </Grid>

              </CardActions>
            </CardActionArea>
          </Card>

        </ListItem>
      </Grid>

  ))


  return (

      <Container>

        <Typography gutterBottom align="center" variant="h4">
          My Pokemon Party
        </Typography>

        <List>
          <Grid container direction="row" style={{marginTop: '2%'}}>
            {partyList}
          </Grid>
        </List>

      </Container>
  )
}
 