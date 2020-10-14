const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pokemon = new Schema({
  name:{
    type:String,
    required: true,
  },
  pokeId: {
    type: Number,
    required: true
  },
  pokeImg: {
    type: String,
    required: true
  },
  owner: {
    type:String, 
    required: true
  }
})

module.exports = mongoose.model("Pokemon", Pokemon)
''