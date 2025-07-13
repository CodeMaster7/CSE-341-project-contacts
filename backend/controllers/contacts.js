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

module.exports = {
	getAllContacts,
	getContactById
}
