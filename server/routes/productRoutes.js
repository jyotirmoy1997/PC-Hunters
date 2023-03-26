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
productRoutes.post("/createProduct", createProduct)

productRoutes.get("/:id", authenticateUser, getSingleProduct)
productRoutes.patch("/:id", updateProduct)
productRoutes.delete("/:id", deleteProduct)

module.exports = productRoutes