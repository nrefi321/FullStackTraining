import express from 'express'
import testRoutes from './routes/testRoutes.js'
import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv'
import connectDB from './utils/db.js'
// import mongoose from 'mongoose'

// connectDB()
dotenv.config()

const app = express()

app.use('/api', testRoutes)
app.use('/api/products', productRoutes)

app.get('/api/testdb', async (req, res) => {
    try {
        await connectDB()
        res.send('Connected to MongoDB')
    } catch (error) {
        res.status(500).send('Failed to connect to MongoDB')
    }
    })

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`)
})