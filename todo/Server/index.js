import express from 'express'
import cors from 'cors'
import connectToDB from './DB/index.js'
import cookieParser from 'cookie-parser'
import { InsertData, getData, logIn, signUpController } from './controller/todo.controller.js'
import bodyParser from 'body-parser'
const PORT = 8000
const app = express()
app.use(bodyParser())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
connectToDB.then(console.log(`DataBase Connected Succefully`)).catch("Cant Conneted")
app.use(cors())
app.post('/InsertData', InsertData)
app.post('/signUp', signUpController)
app.post('/logIn', logIn)
app.get('/getData/:userID', getData)
app.listen(PORT, () => {
    console.log(`listning in port Number ${PORT}`);
})
export default app;