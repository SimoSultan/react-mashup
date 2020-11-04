import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

import { capitalize, getPokemonNumber } from './Helpers'
import axios from 'axios'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Container, Box, Typography, Button } from '@material-ui/core';

import { Link } from "react-router-dom";


async function addToParty(url) {
  let pokemon = {}

  await axios.get(url).then(res => {
    let p = res.data
    pokemon.name = p.name
    pokemon.pokeId = p.id
    pokemon.type1 = (p.types[0] === undefined ? "None" : p.types[0].type.name)
    pokemon.type2 = (p.types[1] === undefined ? "None" : p.types[1].type.name)
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
export default function PokemonList() {

  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  // const [showPokemon, setShowPokemon] = useState(null)

    // this is a hook that takes a function
  // it runs every single time based on the props that we pass
  useEffect(() => {
    // every time we make a request, set loading state to be true
    setLoading(true)
    let cancel
    // axios can take a 2nd parameter as an object
    // every time axios makes a call, it will set the cancelToken into cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      // when the request is fetched, then set loading state to false
      setLoading(false)
      // this data being passed in from the promise is in the object returned from the API
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      // when the result comes through from the promise, map over the array of objects to get the name
      setPokemon(res.data.results)
    })

    // useEffect allows us to return a function which gets called every time useEffect gets called again
    // allows us to cancel previous request every time a new request comes through
    return () => cancel()

    // we pass an array of arguments
    // every time the elements in the array change, it will rerun the effect
    // if we leave it empty, it will only run one single time
    // but putting currentPageUrl in there, if the contents have changed in that url, then re-run the effect
  }, [currentPageUrl])

  //Pagination component uses these
  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  
  const listItemsWithDividers = []
  const listItems = pokemon.map(p => (
    <ListItem key={p.name}>
      <ListItemText primary={`#${getPokemonNumber(p.url)} ${capitalize(p.name)}`}/>
      <ListItemSecondaryAction>
          <Button variant="outlined" color="primary" onClick={() => addToParty(p.url)}>
            Add to Party
          </Button>
          {/* <Button variant="outlined" color="primary" onClick={() => changeShowPokemon(p.url)}> */}
          <Button variant="outlined" color="primary">
            <Link to={`/pokemon/show/${getPokemonNumber(p.url)}`}>Learn More</Link>
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

    <Container >

      <Box mt="1%">
        <Typography gutterBottom align="center" variant="h4">
          The Pokedex
        </Typography>
      </Box>

      <List>
        {listItemsWithDividers}
      </List>

      <Container className="d-flex justify-content-center">
        <Pagination
          goToNextPage = { nextPageUrl ? goToNextPage : null }
          goToPrevPage = { prevPageUrl ? goToPrevPage : null }
        />
      </Container>

    </Container>

  )
}