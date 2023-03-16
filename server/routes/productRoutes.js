const productRoutes = require("express").Router()
const compose = require("compose-middleware").compose
const {
    authenticateUser,
    authorizePermission
} = require("../middleware/authentication")


const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController")


const authMiddlewares = compose([authenticateUser, authorizePermission])

productRoutes.get("/getAllProducts", authenticateUser, getAllProducts)
productRoutes.post("/createProduct", authMiddlewares, createProduct)

productRoutes.get("/:id", authenticateUser, getSingleProduct)
productRoutes.patch("/:id", authMiddlewares, updateProduct)
productRoutes.delete("/:id", authMiddlewares, deleteProduct)

module.exports = productRoutes