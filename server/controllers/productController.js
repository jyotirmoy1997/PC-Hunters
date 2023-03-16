const Product = require("../model/Product")
const { StatusCodes } = require("http-status-codes")
const CustomError = require("../errors/index")
// const productData = require("../mockData/products.json")

const createProduct = async (req, res) => {
    req.body.user = req.user.userId
    const product = await Product.create({...req.body})
    res.status(StatusCodes.CREATED).json(product)
}

const getAllProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(StatusCodes.OK).json(products)
}

const getSingleProduct = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id})
    if(!product){
        throw new CustomError.NotFoundError("Product Not Found")
    }
    res.status(StatusCodes.OK).json(product)
}

const updateProduct = async (req, res) => {
    const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {
        new : true
    })
    if(!product){
        throw new CustomError.NotFoundError("Product Not Found")
    }
    res.status(StatusCodes.OK).json(product)
}

const deleteProduct = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id})
    if(!product){
        throw new CustomError.NotFoundError("Product Not Found")
    }
    await product.remove()
    res.status(StatusCodes.OK).send("Product Removed")
}


module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}