import React from 'react';
import PokemonList from './PokemonList';
import PartyList from './PartyList';
import { Container, Box, Typography, Button } from '@material-ui/core';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Pokedex() {


  return (

      <Container>

        <Box mt="1%">
          <Typography gutterBottom align="center" variant="h2">
            Simo_Sultan's Pokemon React App
          </Typography>
        </Box>
        
        <Router>
          {/* <Button variant="outlined" color="primary" onClick={() => getParty()}> */}
          <Button variant="outlined" color="primary" >
            <Link to="/pokemon/party">My Party</Link>
          </Button>
          <Button variant="outlined" color="primary" >
            <Link to="/pokemon/pokedex">The Pokedex</Link>
          </Button>
          <Switch>
            <Route path="/pokemon/party" exact component={() => <PartyList />} />
            {/* <Route path="/pokemon/pokedex" exact component={() => <PokemonList pokemon={pokemon} changeSummaryPokemon = { changeSummaryPokemon } />} /> */}
            <Route path="/pokemon/pokedex" exact component={() => <PokemonList />} />
          </Switch>
        </Router>
      
      </Container>

  );

}

export default Pokedex;
