const { Router } = require("express");
const { getUsersController } = require("../controller/user.controller");

const userRouter = new Router();

userRouter.get("/", getUsersController);

module.exports = { userRouter };
