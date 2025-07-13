// Import Express router
const express = require('express')
const router = express.Router()

// Import route modules
const contactsRoutes = require('./contacts')

// Mount route modules
router.use('/contacts', contactsRoutes)

// Export the router
module.exports = router
