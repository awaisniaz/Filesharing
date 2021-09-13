import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db'
import fileRouter from './Routes/filesRoutes'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
dotenv.config()
connectDb()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()) 
app.use(cors());

app.use('/files/api/upload',fileRouter)
app.use('/files')

app.listen(PORT,() => {
    console.log(`😎 Server is listening on port ${PORT}`)
})