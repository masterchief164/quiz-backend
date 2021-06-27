const mongoose = require("mongoose");

const participantSchema = mongoose.Schema({
    email:String,
    password:String,
    username:String,
    name: String,
    score: {
        type:Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const participant = mongoose.model("Participant", participantSchema);

module.exports = participant;