// Import Express router
const express = require('express')
const router = express.Router()

// GET /api/test - Basic test endpoint
router.get('/test', (req, res) => {
	res.json({
		message: 'API test successful!',
		timestamp: new Date().toISOString()
	})
})

// Export the router
module.exports = router
