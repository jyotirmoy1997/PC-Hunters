const express = require("express")
const { getAllOrders } = require("../controllers/OrderController")

const orderRouter = express.Router()

orderRouter.get("/getAllOrders/:userId", getAllOrders)


module.exports = orderRouter