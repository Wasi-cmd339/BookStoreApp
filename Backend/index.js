import express  from"express";
import mongoose from "mongoose";
import dotenv from"dotenv";
import cors from "cors";
import bookRouter from "./Route/BookRouter.js";
import UserRouter from "./Route/UserRouter.js"

const app = express()

app.use(cors())
app.use(express.json()); // Middleware to parse JSON bodies

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

// Connect to MongoDB

try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connect To Mongoose")
    
} catch (error) {
    console.log("Error", error)
    
}

// difining routes

app.use("/book", bookRouter)
app.use("/user", UserRouter)

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})