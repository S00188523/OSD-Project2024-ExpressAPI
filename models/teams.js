const mongoose  = require('mongoose');

const teamSchema = new mongoose.Schema({
    name : {type: String, required: true},
    venue : String,
    league : String,
    kitColour : String,
    manager : String
});

const Team = mongoose.model('team', teamSchema);

module.exports = {Team}
