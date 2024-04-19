import express from "express";
import userRouter from "./routes/user.route.js";
import catRouter from "./routes/catogery.router.js";
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/user', userRouter);
app.use('/catogery', catRouter)



app.listen(8000, () => console.log('Server Started'))
