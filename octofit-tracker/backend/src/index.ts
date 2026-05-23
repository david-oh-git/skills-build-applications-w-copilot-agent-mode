import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8000
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit'

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
moose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

// Health Check Endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker Backend is running' })
})

// API Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker Backend is running' })
})

// Start Server
app.listen(port, () => {
  console.log(`🐙 OctoFit Tracker Backend is running on port ${port}`)
})
