const express = require('express')
const router = express.Router()
// const UserModel = require('../models/user.model')
const PokemonModel = require('../models/pokemon.model')

// get all pokemon in party
router.get('/', async (req,res) => {
  try {
    let party = await PokemonModel.find()
    res.status(200).send(party)
  } catch (error) {
    res.status(400).json(`Error: ${error}}`)
  }
})

// add a pokemon to the party
router.post('/add', async (req,res) => {
  const pokemon = req.body
  const newPokemon = new PokemonModel(pokemon)
  try {
    await newPokemon.save()
    res.status(200).json("pokemon added")
  } catch (error) { 
    res.status(400).json(`Error: ${error}}`)
    
  }
})

// get 1 pokemon from the party
router.get('/:id', async (req,res) => {
  const id = req.params.id
  try {
    // let pokemon = await PokemonModel.findOne({pokeId: id, owner: 'simon'})
    let pokemon = await PokemonModel.findById(id)
    res.status(200).json(pokemon)
  } catch (error) {
    res.status(400).json(`Error: ${error}}`)
  }
})

// delete a pokemon from the party
router.delete('/:id', async (req,res) => {
  const id = req.params.id
  try {
    await PokemonModel.findByIdAndDelete(id)
    res.status(200).json('Pokemon deleted')
  } catch (error) {
    res.status(400).json(`Error: ${error}}`)
  }
})

// update a pokemon from the party
router.put('/:id', async (req,res) => {
  const id = req.params.id
  const pokemon = req.body
  try {
    let pokemonUpdated = await PokemonModel.findByIdAndUpdate(id, pokemon, {new:true})
    console.log(pokemonUpdated);
    res.status(200).json('pokemon updated')
  } catch (error) { 
    res.status(400).json(`Error: ${error}}`)
    
  }
})


module.exports = router