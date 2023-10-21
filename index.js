const express = require('express')
const app = express()

require('dotenv').config();

app.use(express.json());

require('./database')
const port = process.env.PORT || 3001

app.use(express.json());

const {Team} = require('./models/teams')
const teams = require('./routes/teams')

app.use('/api/v1/teams', teams)

app.listen(port, () => console.log(`Assignment 1 app listening on port ${port}!`))
