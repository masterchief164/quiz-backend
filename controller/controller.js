const Contest = require("../models/models")

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

module.exports = {createContest, deleteContest, getContests};