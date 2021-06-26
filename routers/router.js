const express = require("express");
const controller = require("../controller/controller");

const postRouter = express.Router();
postRouter.post("/contest",controller.createContest);
postRouter.get("/contest",controller.getContests);
postRouter.delete("/contest/:id",controller.deleteContest);

module.exports = postRouter;