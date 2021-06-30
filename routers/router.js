const express = require("express");
const controller = require("../controller/controller");

const postRouter = express.Router();
postRouter.post("/contest",controller.createContest);
postRouter.get("/contest",controller.getContests);
postRouter.delete("/contest/:id",controller.deleteContest);
postRouter.get("/participants",controller.getParticipants)
postRouter.post("/participants",controller.createParticipant);
postRouter.put("/participants/:id",controller.updateParticipant);
postRouter.post("/participants/login",controller.loginParticipant);
module.exports = postRouter;