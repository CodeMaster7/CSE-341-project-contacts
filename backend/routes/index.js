// Import Express router
const express = require('express')
const router = express.Router()

// Import route modules
const contactsRoutes = require('./contacts')
const swaggerRoutes = require('./swagger')

// Mount route modules
router.use('/contacts', contactsRoutes)
router.use('/', swaggerRoutes)

// Export the router
module.exports = router
