const express = require("express")
const { getAllCartItems, addCartItem, removeCartItem } = require("../controllers/cartController")

const cartRouter = express.Router()

cartRouter.get("/getAllCartItems/:userId", getAllCartItems)
cartRouter.post("/addCartItem", addCartItem)
cartRouter.delete("/removeCartItem", removeCartItem)

module.exports = cartRouter