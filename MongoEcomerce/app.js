import express from 'express'
import userRouter from './routes/user.routes.js'
import productsRouter from './routes/product.routes.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user', userRouter)
// app.use('/products', productsRouter)
app.use('/products', productsRouter);


export default app