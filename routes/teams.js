const express = require('express')

const {Team, ValidateTeam} = require('../models/teams')

const router = express.Router();

router.post('/', async (req, res) => {
  let result = ValidateTeam(req.body)

  if (result.error) {
    res.status(400).json(result.error);
    return;
  }

    let team = new Team(req.body);

    console.log(team) // to check what was received
   
    try {

      team = await team.save();
  
  
      res
        .location(`${team._id}`)
        .status(201)
        .json(team)
    }

    catch (error) {
      res.status(500).send('db_error ' + error)
    }


});

// GET Request to Retrieve All Teams
router.get('/', async (req, res) => {
  try {
      const teams = await Team.find(); // Assuming Team is your Mongoose model
      res.status(200).json(teams);
  } catch (error) {
      res.status(500).send('Error retrieving teams: ' + error);
  }
});

// PUT Request to Update a Team
router.put('/:teamId', async (req, res) => {
  const { teamId } = req.params;
  const update = req.body;

  try {
      const updatedTeam = await Team.findByIdAndUpdate(teamId, update, { new: true });
      if (!updatedTeam) {
          return res.status(404).send('Team not found.');
      }
      res.status(200).json(updatedTeam);
  } catch (error) {
      res.status(500).send('Error updating team: ' + error);
  }
});

// PUT Request to Update a Team
router.put('/:teamId', async (req, res) => {
  const { teamId } = req.params;
  const update = req.body;

  try {
      const updatedTeam = await Team.findByIdAndUpdate(teamId, update, { new: true });
      if (!updatedTeam) {
          return res.status(404).send('Team not found.');
      }
      res.status(200).json(updatedTeam);
  } catch (error) {
      res.status(500).send('Error updating team: ' + error);
  }
});

// DELETE Request to Remove a Team
router.delete('/:teamId', async (req, res) => {
  const { teamId } = req.params;

  try {
      const deletedTeam = await Team.findByIdAndRemove(teamId);
      if (!deletedTeam) {
          return res.status(404).send('Team not found.');
      }
      res.status(204).send(); // No content (successful deletion)
  } catch (error) {
      res.status(500).send('Error deleting team: ' + error);
  }
});

module.exports = router
