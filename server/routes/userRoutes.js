const userRouter = require("express").Router()

const {
    getAllUsers,
} = require("../controllers/userController")

userRouter.get("/getAllUsers", getAllUsers)


module.exports = userRouter