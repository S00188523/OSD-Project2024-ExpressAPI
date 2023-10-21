const express = require('express');

const { Team } = require('../models/teams');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);
    let team = new Team(req.body);

    console.log(team) // to check what was received
   
    try {
        const { clubName, venue, league, kitColour, dateFounded } = req.body;
    
        // Create a new team instance with all the fields
        const contact = new Contact({ clubName, venue, league, kitColour, dateFounded });
    
        // Save the taem to the database
        const savedTeam = await team.save();
    
        // Respond with the saved teams, which should include all the fields
        res.status(201).json(savedTeam);
    }

    catch (error) {
      res.status(500).send('db_error ' + error)
    }


});

router.get('/', async (req, res) => {

    try {
      const games = await Game.find()
      res.json(games);
    }
    catch (error) {
      res.status(500).json('db error ' + error)
    }
  });

module.exports = router