import express from 'express'
import path from 'path'
import 'express-async-errors'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

//import errorHandler from './errors/handler'
import "./database/connection"
import routes from "./routes"

const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)

//app.use(errorHandler)

app.listen(3333)
