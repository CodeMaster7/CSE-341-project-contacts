# CSE 341 Web Services

A fullstack web application with Node.js/Express backend and MongoDB database using pnpm workspaces.

## Project Structure

```
CSE 341 Web Services/
├── frontend/           # Client-side application
│   ├── index.html
│   ├── script.js
│   └── style.css
├── backend/            # Server-side application
│   ├── server.js       # Main server file
│   ├── package.json    # Backend dependencies
│   ├── data/           # Database connection
│   │   └── database.js
│   ├── controllers/    # Request handlers
│   │   └── contacts.js
│   ├── services/       # Business logic
│   │   └── contacts.js
│   ├── routes/         # API routes
│   │   ├── index.js
│   │   └── contacts.js
│   └── test.http       # API testing file
├── package.json        # Root workspace configuration
└── README.md           # This file
```

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   pnpm (install with `npm install -g pnpm`)
-   MongoDB (local installation or MongoDB Atlas account)

### Installation

1. **Clone the repository and install dependencies:**

```bash
pnpm install
```

2. **Set up environment variables:**

```bash
# Copy the example environment file
cp backend/.env.example backend/.env

# Edit backend/.env with your MongoDB connection string
```

3. **Start MongoDB:**

```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (cloud) - update MONGODB_URI in .env
```

### Running the Application

#### Development Mode

```bash
# Run backend with auto-restart
cd backend
pnpm run dev

# Or from root directory
pnpm dev:backend
```

#### Production Mode

```bash
# Start the backend server
pnpm start
```

## Environment Variables

Create a `backend/.env` file with:

```bash
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/cse341-web-services

# Server Configuration
PORT=3000
NODE_ENV=development
```

## API Endpoints

The backend runs on `http://localhost:3000` with the following endpoints:

### Contacts API

-   `GET /api/contacts` - Get all contacts
-   `GET /api/contacts/:id` - Get contact by ID
-   `GET /api/test` - API test endpoint

### Example API Usage

```javascript
// Get all contacts
fetch('http://localhost:3000/api/contacts')
	.then((response) => response.json())
	.then((data) => console.log(data))

// Get contact by ID
fetch('http://localhost:3000/api/contacts/6872e8294600469b99767f43')
	.then((response) => response.json())
	.then((data) => console.log(data))

// Test API endpoint
fetch('http://localhost:3000/api/test')
	.then((response) => response.json())
	.then((data) => console.log(data))
```

## Testing the API

Use the included `backend/test.http` file with the REST Client extension in VS Code:

```http
### Get all contacts
GET http://localhost:3000/api/contacts

### Get a contact by id
GET http://localhost:3000/api/contacts/6872e8294600469b99767f43
```

## Database Schema

### Contacts Collection

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Architecture

This application follows a 3-layer architecture pattern:

-   **Routes** (`routes/`) - Handle HTTP requests/responses
-   **Controllers** (`controllers/`) - Orchestrate request flow
-   **Services** (`services/`) - Business logic and data processing
-   **Data** (`data/`) - Database connection and configuration

## Technologies Used

-   **Backend**: Node.js, Express.js, MongoDB, CORS
-   **Frontend**: HTML5, CSS3, JavaScript
-   **Database**: MongoDB with native Node.js driver
-   **Package Manager**: pnpm
-   **Development**: Native Node.js --watch flag for auto-restart
-   **Testing**: REST Client extension for VS Code

## Adding Sample Data

You can add sample contacts using MongoDB Compass or the MongoDB shell:

```javascript
// In MongoDB shell or Compass
db.contacts.insertMany([
	{
		name: 'John Doe',
		email: 'john@example.com',
		phone: '123-456-7890',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: 'Jane Smith',
		email: 'jane@example.com',
		phone: '987-654-3210',
		createdAt: new Date(),
		updatedAt: new Date()
	}
])
```
