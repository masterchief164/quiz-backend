const Contest = require("../models/models")
const Participant = require("../models/participantModel")

const createContest = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            message: "Empty Body"
        });
    }

    const contest = new Contest(body);

    if (!contest) {
        return res.status(400).json({success: false, error: "Contest not created"});
    }

    contest.save().then(() => {
        return res.status(200).json({
            success: true,
            id: contest._id,
            message: "Contest created successfully",
            data: contest
        }).catch(err => {
            return res.status(400).json({
                success: false,
                error: err,
                message: "Contest not saved"
            })
        })
    });
}

const deleteContest = async (req, res) => {
    await Contest.findOneAndDelete({_id: req.params.id}, (err, contest) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        return res.status(200).json({success: true, data: contest})
    }).catch(err => console.log(err))
}

const getContests = async (req, res) => {
    await Contest.find({}, (err, contest) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        return res.status(200).json({success: true, data: contest})
    }).catch(err => console.log(err))
}

const createParticipant = async (req,res)=>{
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            message: "Empty Body"
        });
    }
    console.log(body);
    const participant = new Participant(body);

    if (!participant) {
        return res.status(400).json({success: false, error: "Contest not created"});
    }

    participant.save().then(() => {
        return res.status(200).json({
            success: true,
            id: participant._id,
            message: "Contest created successfully",
            data: participant
        }).catch(err => {
            return res.status(400).json({
                success: false,
                error: err,
                message: "Contest not saved"
            })
        })
    });
}

const getParticipants = async (req, res) => {
    await Participant.find({}, (err, participants) => {
        if (err) {
            console.log("here")
            return res.status(400).json({success: false, error: err})
        }
        return res.status(200).json({success: true, data: participants})
    }).catch(err => console.log(err))
}

const loginParticipant = async (req,res)=>{
    const uName = req.body.username;
    const pass = req.body.password;
    Participant.findOne({username:uName},function (err, participant) {
        if(err)
            console.log(err);
        else{
            if(participant)
            {
                if(participant.password ===pass)
                    res.status(200).json({found:true,correct:true})
                else
                    res.status(200).json({found:true,correct:false})
            }
            else{
                res.status(404).json({found:false,correct:false})
            }
        }

    }).catch(err=>{
        res.status(400).json({error:err});
    })
}

const updateParticipant = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Participant.findOne({ _id: req.params.id }, (err, participant) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        participant.score= body.score;
        participant
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: participant._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })
    })
}

module.exports = {createContest, deleteContest, getContests,createParticipant,getParticipants,updateParticipant,loginParticipant};