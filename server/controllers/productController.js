const Product = require("../model/Product")
const Categories = require("../model/Categories")
const { StatusCodes } = require("http-status-codes")
const CustomError = require("../errors/index")
// const productData = require("../mockData/products.json")

const createProduct = async (req, res) => {
    // console.log(req.body)
    // res.send("Okay")
    // req.body.user = req.user.userId
    try {
        const product = await Product.create({...req.body})
        // console.log(product)
        const category = await Categories.findOneAndUpdate({name : product.category},
            {
                $push : {products : product._id}
            },
            {new : true})
        return res.status(StatusCodes.CREATED).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Server error" })
    }
    
    
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
    // console.log(req.params)
    // console.log(req.body)
    const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {
        new : true
    })
    if(!product){
        return res.status(404).json({ error: "Product Not Found" })
    }
    res.status(StatusCodes.OK).json(product)
}

const deleteProduct = async (req, res) => {
    // console.log(req.params.id)
    const product = await Product.findOne({_id: req.params.id})
    if(!product){
        return res.status(404).json({ error: "Product Not Found" })
    }
    await product.remove()
    res.status(StatusCodes.OK).json({id : req.params.id})
}


module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}