const mongoose  = require('mongoose');

const teamSchema = new mongoose.Schema({
    clubName: String,
    venue: String,
    league: String,
    kitColour: String,
    dateFounded: Date
})

const Team = mongoose.model('team', teamSchema);

module.exports = {Team}
