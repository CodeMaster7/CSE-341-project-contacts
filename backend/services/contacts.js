// Import MongoDB ObjectId for MongoDB ID handling
const { ObjectId } = require('mongodb')

// Import database connection function
const { getDatabase } = require('../data/database')

// Contact Service - Contains all business logic for contacts
// This is where we put the "what should happen" logic, separate from HTTP handling
const ContactService = {
	/**
	 * Get all contacts from the database
	 * @returns {Promise<Array>} Array of all contact documents
	 */
	async getAllContacts() {
		// Get the database connection
		const db = getDatabase()

		// Query MongoDB: find all documents in 'contacts' collection
		// .find() with no parameters = get everything
		// .toArray() converts MongoDB to JavaScript array
		return await db.collection('contacts').find().toArray()
	},

	/**
	 * Get a contact by id from the database
	 * @param {string} contactId - The id of the contact to get
	 * @returns {Promise<Object>} The contact document
	 */
	async getContactById(contactId) {
		const db = getDatabase()
		// Query MongoDB: find the contact with the given id
		return await db.collection('contacts').findOne({ _id: new ObjectId(contactId) })
	}
}

// Export the service so controllers can use it
module.exports = ContactService
