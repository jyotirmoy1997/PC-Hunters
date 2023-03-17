const express = require("express")
const { getAllCartItems, addCartItem } = require("../controllers/cartController")

const cartRouter = express.Router()

cartRouter.get("/getAllCartItems", getAllCartItems)
cartRouter.post("/addCartItem", addCartItem)

module.exports = cartRouter