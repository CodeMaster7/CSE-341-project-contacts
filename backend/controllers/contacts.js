const ContactService = require('../services/contacts')

// Get all contacts controller
const getAllContacts = async (req, res) => {
	try {
		const contacts = await ContactService.getAllContacts()
		res.json(contacts)
	} catch (error) {
		console.error('Error fetching contacts:', error)
		res.status(500).json({ error: 'Failed to fetch contacts' })
	}
}

const getContactById = async (req, res) => {
	const contactId = req.params.id
	const contact = await ContactService.getContactById(contactId)
	res.json(contact)
}

// Create a new contact controller
const createContact = async (req, res) => {
	try {
		// Get contact data from request body
		const { firstName, lastName, email, favoriteColor, birthday } = req.body

		// Validate required fields
		if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
			return res.status(400).json({
				error: 'All fields are required: firstName, lastName, email, favoriteColor, birthday'
			})
		}

		// Create the contact
		const newContact = { firstName, lastName, email, favoriteColor, birthday }
		const result = await ContactService.createContact(newContact)

		// Return the new contact ID
		res.status(201).json({ id: result.insertedId })
	} catch (error) {
		console.error('Error creating contact:', error)
		res.status(500).json({ error: 'Failed to create contact' })
	}
}

// Update a contact controller
const updateContact = async (req, res) => {
	try {
		// Get contact ID from URL parameter
		const contactId = req.params.id

		// Get contact data from request body
		const { firstName, lastName, email, favoriteColor, birthday } = req.body

		// Validate required fields
		if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
			return res.status(400).json({
				error: 'All fields are required: firstName, lastName, email, favoriteColor, birthday'
			})
		}

		// Update the contact
		const updatedContact = { firstName, lastName, email, favoriteColor, birthday }
		const result = await ContactService.updateContact(contactId, updatedContact)

		// Check if contact was found and updated
		if (result.matchedCount === 0) {
			return res.status(404).json({ error: 'Contact not found' })
		}

		// Return success status (204 No Content for successful update)
		res.status(204).send()
	} catch (error) {
		console.error('Error updating contact:', error)
		res.status(500).json({ error: 'Failed to update contact' })
	}
}

// Delete a contact controller
const deleteContact = async (req, res) => {
	try {
		// Get contact ID from URL parameter
		const contactId = req.params.id

		// Delete the contact
		const result = await ContactService.deleteContact(contactId)

		// Check if contact was found and deleted
		if (result.deletedCount === 0) {
			return res.status(404).json({ error: 'Contact not found' })
		}

		// Return success status (204 No Content for successful deletion)
		res.status(204).send()
	} catch (error) {
		console.error('Error deleting contact:', error)
		res.status(500).json({ error: 'Failed to delete contact' })
	}
}

module.exports = {
	getAllContacts,
	getContactById,
	createContact,
	updateContact,
	deleteContact
}
