const express = require("express")
const { getAllCartItems, addCartItem, removeCartItem, updateCartItem } = require("../controllers/cartController")

const cartRouter = express.Router()

cartRouter.get("/getAllCartItems/:userId", getAllCartItems)
cartRouter.post("/addCartItem", addCartItem)
cartRouter.patch("/updateCartItem", updateCartItem)
cartRouter.delete("/removeCartItem", removeCartItem)

module.exports = cartRouter