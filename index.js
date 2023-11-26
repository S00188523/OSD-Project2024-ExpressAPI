const express = require('express')
const https = require('https')
const cors = require('cors')


require('dotenv').config();

const app = express()
app.use(express.json());

const db = require('./database')
const port = process.env.PORT || 3001

const {Team} = require('./models/teams')
const teams = require('./routes/teams')

app.use(express.json());

app.use(cors(corsOptions))

app.use('/api/v1/teams', teams)

app.use('/teams', cors(), teams);

var corsOptions = {
    origin: 'http://loclahost:4200',
    optionsSuccessStatus: 200
  }

app.listen(port, () => console.log(`Assignment 1 app listening on port ${port}!`))
