const express = require('express')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3001

app.use(express.json());
const {Team} = require('./models/teams')
const teams = require('./routes/teams')
app.use('/api/v1/teams', teams)

app.listen(port, () => console.log(`Assignment 1 app listening on port ${port}!`))
