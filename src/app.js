import express, { urlencoded } from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser';

const app = express();


app.use(cors({
    origin:CORS_ORIGIN,
    credentials : true
}))

//Configuration using Middlewares
app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({extended:true, limit: "20kb"}));
app.use(express.static("public"));// to store images files etc.. on over server example favicon 
app.use(cookieParser())

export {app};