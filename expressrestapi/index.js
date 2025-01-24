import express from 'express'
import testRoutes from './routes/testRoutes.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'
import connectDB from './utils/db.js'
import setupSwagger from './utils/swagger.js'
import { set } from 'mongoose'
// import mongoose from 'mongoose'

connectDB()
dotenv.config()

const app = express()
app.use(express.json())
setupSwagger(app)

app.use('/api', testRoutes)
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

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

// // เริ่มต้น server
// const startServer = async () => {
//     try {
//       // เชื่อมต่อ MongoDB ก่อน
//       await connectDB()
      
//       // จากนั้นค่อยเริ่ม server
//       app.listen(process.env.PORT, () => {
//         console.log(`Server started on http://${process.env.HOST}:${process.env.PORT}`)
//       })
//     } catch (error) {
//       console.error('Failed to start server:', error)
//       process.exit(1)
//     }
//   }
  
//   startServer()