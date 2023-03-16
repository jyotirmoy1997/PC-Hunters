const User = require("../model/User")
const {StatusCodes} = require("http-status-codes")
const CustomError = require("../errors/index")
const createTokenUser = require("../utils/createTokenUser")
const {attachCookiesToResponse} = require("../utils/JWT")
const checkPermissions = require("../utils/checkPermissions")

const getAllUsers = async (req, res) => {
    const users = await User.find({role : 'user'}).select('-password')
    res.status(StatusCodes.OK).json(users)
}

const getSingleUser = async (req, res) => {
    const user = await User.findOne({_id : req.params.id}).select('-password')
    checkPermissions(req.user, user._id, 'admin')
    res.status(StatusCodes.OK).json(user)
}

const showCurrentUser = (req, res) => {
    res.status(StatusCodes.OK).json(req.user)
}

const updateUser = async (req, res) => {
    const {email, name} = req.body
    if(!email || !name){
        throw new CustomError.BadRequestError("Please provide credentials")
    }
    const user = await User.findOneAndUpdate(
        {_id : req.user.userId}, 
        {email, name}, 
        {
            new : true,
            runValidators : true
        })
    const tokenUser = createTokenUser(user)
    attachCookiesToResponse(res, tokenUser)
    res.status(200).json(tokenUser)
}

const updateUserPassword = async (req, res) => {
    const {oldPassword, newPassword } = req.body
    if(!oldPassword && !newPassword){
        throw new CustomError.BadRequestError("Please provide both passwords")
    }
    const user = await User.findOne({_id: req.user.userId})
    if(!user){
        throw new CustomError.NotFoundError("User Not Found")
    }
    const isPasswordMatch = user.comparePassword(oldPassword)
    if(!isPasswordMatch){
        throw new CustomError.UnauthenticatedError("Wrong Password")
    }

    // Updating the User Password
    user.password = newPassword

    // Very Important => User.save() works after we update a new value
    await user.save()

    res.status(200).send("Updated User Password")
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}