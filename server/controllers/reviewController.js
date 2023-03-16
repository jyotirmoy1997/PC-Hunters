const {StatusCodes} = require("http-status-codes")
const CustomError = require("../errors/index")
const Review = require("../model/Review")
const Product = require("../model/Product")
const checkPermissions = require("../utils/checkPermissions")

const createReview = async (req, res) => {
    const { product : productId } = req.body
    const isValidProduct = await Product.findOne({_id: productId})
    // console.log(isValidProduct)
    // Checking whether the product exists or not
    if(!isValidProduct){
        throw new CustomError.NotFoundError("Product does not exist")
    }

    // Checking whether the user has already submitted a review or not
    const isSubmitted = await Review.findOne({
        product : productId,
        user : req.user.userId
    })

    console.log(isSubmitted)

    if(isSubmitted){
        throw new CustomError.BadRequestError("Review Already Submitted")
    }

    req.body.user = req.user.userId
    const review = await Review.create(req.body)
    res.status(StatusCodes.CREATED).json(review)
}

const getAllReviews = async (req, res) => {
    const reviews = await Review.find({})
    res.status(StatusCodes.OK).json(reviews)
}

const getSingleReview = async (req, res) => {
    const review = await Review.findOne({_id : req.params.id}).populate({
        path : 'product', 
        select : 'name'})
    if(!review){
        throw new CustomError.NotFoundError("No Reviews")
    }
    res.status(StatusCodes.OK).json(review)
}

const updateReview = async (req, res) => {
    const { rating, title, comment } = req.body
    const review = await Review.findOne({_id : req.params.id})
    if(!review){
        throw new CustomError.NotFoundError("No Reviews")
    }
    checkPermissions(req.user, review.user)

    review.rating = rating
    review.title = title
    review.comment = comment
    
    await review.save()
    res.status(StatusCodes.OK).json(review)
}

const deleteReview = async (req, res) => {
    const review = await Review.findOne({_id : req.params.id})
    if(!review){
        throw new CustomError.NotFoundError("No Reviews")
    }
    checkPermissions(req.user, review.user)
    await review.remove()
    res.status(StatusCodes.OK).send("Review Removed")
}

const getSingleProductReviews = async (req, res) => {
    const reviews = await Review.findOne({product : req.params.id})
    console.log(reviews)
    if(!reviews){
        return res.send("No Reviews for Product")
    }
    res.status(StatusCodes.OK).json(reviews)
}

module.exports = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    getSingleProductReviews
}