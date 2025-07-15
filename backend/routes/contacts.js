const express = require('express')
const {
	getAllContacts,
	getContactById,
	createContact,
	updateContact,
	deleteContact
} = require('../controllers/contacts')

const router = express.Router()

// GET /contacts - Get all contacts
router.get('/', getAllContacts)
// GET /contacts/:id - Get a contact by id
router.get('/:id', getContactById)
// POST /contacts - Create a new contact
router.post('/', createContact)
// PUT /contacts/:id - Update a contact by id
router.put('/:id', updateContact)
// DELETE /contacts/:id - Delete a contact by id
router.delete('/:id', deleteContact)

module.exports = router
