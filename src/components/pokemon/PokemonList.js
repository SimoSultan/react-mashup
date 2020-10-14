import React from 'react'
import { capitalize, getPokemonNumber } from './Helpers'
import axios from 'axios'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { Container, Button } from '@material-ui/core';


async function addToParty(url) {
  let pokemon = {}

  await axios.get(url).then(res => {
    let p = res.data
    pokemon.name = p.name
    pokemon.pokeId = p.id
    pokemon.pokeImg = p.sprites.front_default
    pokemon.owner = 'simon'
  })

  console.log(pokemon)
  
  try {
    let res = await axios.post('http://localhost:4000/pokemon/add', pokemon)
    console.log(res.data);
  } catch (error) {
    console.error(error)
  }
}

// using destructuring because props is coming into this component as props.pokemon
export default function PokemonList( { pokemon, changeSummaryPokemon }) {

  const listItemsWithDividers = []
  const listItems = pokemon.map(p => (
    <ListItem key={p.name}>
      <ListItemText primary={`#${getPokemonNumber(p.url)} ${capitalize(p.name)}`}/>
      <ListItemSecondaryAction>
          <Button variant="outlined" color="primary" onClick={() => addToParty(p.url)}>
            Add to Party
          </Button>
          <Button variant="outlined" color="primary" onClick={() => changeSummaryPokemon(p.url)}>
            More Details
          </Button>
      </ListItemSecondaryAction>
    </ListItem>
  ))

  listItems.forEach((item, index) => {
    listItemsWithDividers.push(item)
    if (listItems[index + 1] !== undefined) {
      listItemsWithDividers.push(<Divider />)
    }
  })

  return (
    <Container>
      <List>
        {listItemsWithDividers}
      </List>
    </Container>
  )
}