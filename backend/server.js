// Import required packages
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Import routes
const routes = require('./routes')

// Create Express app
const app = express()

// Set port from environment variable or default to 3000
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors()) // Enable CORS for all routes
app.use(express.json()) // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded request bodies

// Routes
app.use('/api', routes) // All API routes will start with /api

// Basic health check route
app.get('/', (req, res) => {
	res.json({
		message: 'CSE 341 Web Services API is running!',
		timestamp: new Date().toISOString()
	})
})

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).json({ error: 'Something went wrong!' })
})

// 404 handler
app.use('*', (req, res) => {
	res.status(404).json({ error: 'Route not found' })
})

// Start server
app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`)
	console.log(`📡 API available at http://localhost:${PORT}/api`)
})
