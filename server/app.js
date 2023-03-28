const express = require("express")
const connectDB = require("./db/connect")
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
const cors = require("cors")
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)



// Importing Routes
const authRouter = require("./routes/authRoutes")
const userRouter = require("./routes/userRoutes")
const productRouter = require("./routes/productRoutes")
const categoriesRouter = require("./routes/categoryRoutes")
const cartRouter = require("./routes/cartRoutes")
const orderRouter = require("./routes/orderRoutes")
const paymentRouter = require("./routes/paymentRoute")

const Cart = require("./model/Cart")
const Order = require("./model/Order")

const {addNewOrder} = require("./controllers/OrderController")


// This is the logger middleware
const morgan = require("morgan")


const server = express()
const PORT = process.env.PORT || 5000

server.use("/webhook", express.raw({type: "*/*"}))
server.use(express.json())

// Invoking the logger middleware
server.use(morgan("tiny"))

// Invoking CORS middleware
server.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
  }));
  

// Invoking the cookie parser
server.use(cookieParser(process.env.JWT_SECRET))

// Invoking the file upload middleware
server.use(fileUpload({useTempFiles : true}))




server.get("/", (req, res) => {
    // console.log(req.cookies)
    res.send("This is the Home Route")
})

const endpointSecret = process.env.ENDPOINT_SECRET // replace with your webhook secret key



server.use("/api/v1/auth", authRouter)
server.use("/api/v1/users", userRouter)
server.use("/api/v1/products", productRouter)
server.use("/api/v1/categories", categoriesRouter)
server.use("/api/v1/cart", cartRouter)
server.use("/api/v1/order", orderRouter)
server.use("/api/v1/payment", paymentRouter)

server.post('/webhook', express.raw({type: '*/*'}), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;
    let data;
    
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      data = event.data.object

    } catch (err) {
      console.log(err);
      return res.sendStatus(400);
    }
  
    if (event.type === 'checkout.session.completed') {

      console.log("Payment Successfull")
      try {
        const customer = await stripe.customers.retrieve(data.customer)
        console.log(customer.metadata)
        const {user} = customer.metadata
        const userCart = await Cart.findOne({user})


        addNewOrder(user, userCart.products)

        userCart.products.splice(0, userCart.products.length)
        userCart.count = 0
        userCart.total = 0

        await userCart.save()
        

      } catch (err) {
        console.log(err);
      }

      
    } else if (event.type === 'checkout.session.async_payment_failed') {
      console.log("Payment Cancelled")

      
    }
  
    res.sendStatus(200);
  });

server.use(notFoundMiddleware)
server.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("Successfully connected to database.")
        server.listen(PORT, () => {
            console.log(`Listening to Port ${PORT}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()