const mongoose = require("mongoose");

const contestSchema = mongoose.Schema({
    name: String,
    duration: Number,
    date: String,
    time: String,
    organizer: String,
    questions:[{
        desc: String,
        options:[{
            opt1:String,
            opt2:String,
            opt3:String,
            opt4:String
        }],
        correctOpt: Number
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const contest = mongoose.model("Contest",contestSchema);

module.exports= contest;