// Simple Express + MongoDB server
const express = require('express')
const cors = require('cors')
const { initDatabase } = require('./data/database')
const routes = require('./routes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/', routes)

// Start server with database
const startServer = async () => {
	await initDatabase()
	app.listen(PORT, () => {
		console.log(`🚀 Server running on port ${PORT}`)
	})
}

startServer()
