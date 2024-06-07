import express from 'express'
import userRouter from './routes/user.routes.js'
import productsRouter from './routes/product.routes.js'
import categoryroute from './routes/category.routes.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/user', userRouter)
app.use('/products', productsRouter);
app.use("/category", categoryroute)


export default app