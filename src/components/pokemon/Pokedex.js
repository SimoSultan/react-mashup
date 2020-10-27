import React from 'react';
import PokemonList from './PokemonList';
import PartyList from './PartyList';
import PokemonShow from './PokemonShow';
import { Container, Box, Typography, Button } from '@material-ui/core';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Pokedex() {


  return (

    <Router>
      <Container>

        <Box mt="1%">
          <Typography gutterBottom align="center" variant="h2">
            Simo_Sultan's Pokemon React App
          </Typography>
        </Box>
        
          {/* <Button variant="outlined" color="primary" onClick={() => getParty()}> */}
          <Button variant="outlined" color="primary" >
            <Link to="/pokemon/party">My Party</Link>
          </Button>
          <Button variant="outlined" color="primary" >
            <Link to="/pokemon/pokedex">The Pokedex</Link>
          </Button>
          
          <Switch>
            <Route exact path="/pokemon/show/:pokeId" component={() => <PokemonShow /> } />
            <Route exact path="/pokemon/party" component={() => <PartyList />} />
            <Route exact path="/pokemon/pokedex" component={() => <PokemonList />} />
          </Switch>
      
      </Container>
    </Router>

  );

}

export default Pokedex;
