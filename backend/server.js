const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const partyRouter = require('./routes/party')
require('dotenv').config()

const port = process.env.PORT || 4000

app.use( cors() )
app.use( express.urlencoded( {extended: false }) )
app.use( express.json() )

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/pokemon', partyRouter)

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
  console.log('listening on port:' + port)
})