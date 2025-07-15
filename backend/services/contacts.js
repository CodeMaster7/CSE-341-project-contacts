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
	},

	/**
	 * Create a new contact in the database
	 * @param {Object} contactData - The contact data to insert
	 * @returns {Promise<Object>} The insertion result with insertedId
	 */
	async createContact(contactData) {
		const db = getDatabase()
		// Insert the new contact into the 'contacts' collection
		// MongoDB will automatically generate an _id
		return await db.collection('contacts').insertOne(contactData)
	},

	/**
	 * Update a contact in the database
	 * @param {string} contactId - The id of the contact to update
	 * @param {Object} contactData - The contact data to update
	 * @returns {Promise<Object>} The update result with matchedCount and modifiedCount
	 */
	async updateContact(contactId, contactData) {
		const db = getDatabase()
		// Update the contact with the given id
		// Uses $set to replace the fields with new values
		return await db.collection('contacts').updateOne({ _id: new ObjectId(contactId) }, { $set: contactData })
	},

	/**
	 * Delete a contact from the database
	 * @param {string} contactId - The id of the contact to delete
	 * @returns {Promise<Object>} The deletion result with deletedCount
	 */
	async deleteContact(contactId) {
		const db = getDatabase()
		// Delete the contact with the given id
		return await db.collection('contacts').deleteOne({ _id: new ObjectId(contactId) })
	}
}

// Export the service so controllers can use it
module.exports = ContactService
