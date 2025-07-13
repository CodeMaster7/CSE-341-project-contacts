const express = require('express')
const { getAllContacts, getContactById } = require('../controllers/contacts')

const router = express.Router()

// GET /contacts - Get all contacts
router.get('/', getAllContacts)
// GET /contacts/:id - Get a contact by id
router.get('/:id', getContactById)

module.exports = router
