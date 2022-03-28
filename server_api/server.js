require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT || 3001
const URI = `mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@d0nnle-database.ta9wa.mongodb.net/reactFilms?retryWrites=true&w=majority`

app.use(express.json({extended: true}))
app.use('/api', require('./routes/api.route'))


mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log('listener added')
    })
  }).catch(err => console.log(err))

