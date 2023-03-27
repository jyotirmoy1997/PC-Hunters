const express = require("express");
const payment = require("../controllers/paymentController")

const paymentRouter = express.Router()

paymentRouter.post("/", payment)

module.exports = paymentRouter