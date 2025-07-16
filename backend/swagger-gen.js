const swaggerAutogen = require('swagger-autogen')()

// Basic info about your API
const doc = {
	info: {
		title: 'Contacts API',
		description: 'Simple API for managing contacts',
		version: '1.0.0'
	},
	host: undefined,
	schemes: ['https', 'http'],
	basePath: '/'
}

// Where to create the swagger.json file
const outputFile = './swagger.json'

// Which files contain your routes
const endpointsFiles = [
	'./routes/index.js' // This scans the routes through index.js
]

// Generate the swagger documentation
swaggerAutogen(outputFile, endpointsFiles, doc)
