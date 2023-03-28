const express = require("express")
const { addNewOrder } = require("../controllers/orderController")

const orderRouter = express.Router()

orderRouter.post("/addNewOrder", addNewOrder)


module.exports = orderRouter