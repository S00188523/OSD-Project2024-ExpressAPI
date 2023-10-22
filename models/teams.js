const mongoose  = require('mongoose');
const Joi = require('Joi');
const teamSchema = new mongoose.Schema({
    name : {type: String, required: true},
    venue : String,
    venueCapacity : Number,
    league : String,
    kitColour : String,
    manager : String
});

function ValidateTeam (team) {

    const teamJoiSchema = Joi.object({
        name: Joi.string().min(10).required(),
        venue: Joi.string(),
        venueCapacity: Joi.number().integer().min(10000),
        league: Joi.string(),
        kitColour: Joi.string(),
        manager: Joi.string()
    })
    return teamJoiSchema.validate(team);
}

const Team = mongoose.model('team', teamSchema);

module.exports = {Team, ValidateTeam}
