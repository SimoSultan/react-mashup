
import React, { useState, useEffect } from 'react';
import { capitalize } from './Helpers'
import { BrowserRouter as Route, Link, useParams } from "react-router-dom";

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Container, Box, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 300,
    width: 300,
  },
});


export default function PokemonShow() {
  let { pokeId } = useParams();
  const classes = useStyles();
  const [loading, setLoading] = useState(true)
  const [showPokemon, setShowPokemon] = useState({})
  const [currentPokemonUrl, setCurrentPokemonUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
  
  useEffect(() => {
    setLoading(true)
    getPokemonData(currentPokemonUrl)
    console.log(showPokemon);
  }, [])

  async function getPokemonData(url) {
    setLoading(true)
    let res = await axios.get(url)
    console.log(res.data);
    setShowPokemon(res.data)
    setLoading(false)
  }
  
  if (loading) return "Loading..."
  
  let type1 = (showPokemon.types[0] == undefined) ? "None" : showPokemon.types[0].type.name
  let type2 = (showPokemon.types[1] == undefined) ? "None" : showPokemon.types[1].type.name
  let sprite = `https://pokeres.bastionbot.org/images/pokemon/${showPokemon.id}.png` 
  

  return (

      <Container>

        <Typography gutterBottom align="center" variant="h4">
          Pokemon Show Page
        </Typography>

        <Box display="flex" justifyContent="center" mt="3%">



          <Card className={classes.root}>
            <CardActionArea>

              <CardMedia className={classes.media} image={sprite} />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { showPokemon === undefined ? "Name" : `#${showPokemon.id} ${capitalize(showPokemon.name)}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Type1: {capitalize(type1)}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Type2: {capitalize(type2)}
                </Typography>
              </CardContent>

            </CardActionArea>
          </Card>
          
        </Box>

        {/* <Box display="flex" justifyContent=" center" mt="2%">
          <Button variant="contained">
            <Link to="/pokemon">BACK</Link>
          </Button>
        </Box> */}

        {/* <Route exact path="/pokemon" component={() => <Pokedex />} /> */}

      </Container>




  )
}
 