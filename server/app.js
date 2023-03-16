const express = require("express")
const connectDB = require("./db/connect")
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
const cors = require("cors")

// Importing Routes
const authRouter = require("./routes/authRoutes")
const userRouter = require("./routes/userRoutes")
const productRouter = require("./routes/productRoutes")
const categoriesRouter = require("./routes/categoryRoutes")


// This is the logger middleware
const morgan = require("morgan")

require("dotenv").config()

const server = express()
const PORT = process.env.PORT || 5000


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

server.use("/api/v1/auth", authRouter)
server.use("/api/v1/user", userRouter)
server.use("/api/v1/products", productRouter)
server.use("/api/v1/categories", categoriesRouter)

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