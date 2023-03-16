const CustomError = require("../errors/index")
const { isTokenValid } = require("../utils/JWT")

const authenticateUser = (req, res, next) => {
    const token = req.signedCookies
    console.log(token)
    next()
    // console.log(token)
    // if(!token){
    //     throw new CustomError.UnauthenticatedError("Authentication Failed")
    // }
    // try {
    //     const {userId, name, role} = isTokenValid(token)
    //     req.user = {
    //         userId,
    //         name,
    //         role
    //     }
    //     next()
    // } catch (error) {
    //     console.log(error)
    // }
}

const authorizePermission = (req, res, next) => {
    if(req.user.role !== 'admin'){
        throw new CustomError.UnauthorizedError("Restricted Only to Admins")
    }
    next()
}

module.exports = {
    authenticateUser,
    authorizePermission
}