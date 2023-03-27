const userRouter = require("express").Router()
const compose = require("compose-middleware").compose
const {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
} = require("../controllers/userController")
const {
    authenticateUser,
    authorizePermission
} = require("../middleware/authentication")

const authMiddlewares = compose([authenticateUser, authorizePermission])

userRouter.get("/getAllUsers", getAllUsers)
userRouter.get("/showCurrentUser", authenticateUser, showCurrentUser)
userRouter.patch("/updateUser", authenticateUser, updateUser)
userRouter.patch("/updateUserPassword", authenticateUser, updateUserPassword)

userRouter.get("/:id", authenticateUser, getSingleUser)

module.exports = userRouter