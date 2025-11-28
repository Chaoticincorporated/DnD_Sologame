const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create npcs model
const npcListSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    outlook: {
        type: String,
        required: true
    },
    dominantTrait: {
        type: String,
        required: true
    },
    traits: {
        type: [Object],
        required: true
    },
    ambitions: {
        type: [String],
        required: true
    }
});
/*
    id: String,
    name: String,   
    race: String,
    gender: String,
    outlook: String,
    dominantTrait: String,
    traits: [{
        traitName: String,
        intensity: String
    }],
    ambtions: [String]
*/
//pack and export the model
const Npc = mongoose.model("npclist", npcListSchema, 'npclist');
module.exports = Npc;