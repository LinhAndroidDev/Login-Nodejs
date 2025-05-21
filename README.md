# Login Node.js

## Introduction
This is a backend application built with Node.js and Express.js, using MongoDB as the database. The application provides APIs for managing doctor information.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

The server will run at `http://localhost:3000`

## Project Structure
```
├── app.js              # Application entry point
├── config/            # Configuration directory
├── controllers/       # Controllers directory
├── models/           # Models directory
├── routes/           # Routes directory
└── node_modules/     # Dependencies directory
```

## API Endpoints
APIs are provided through the `/` route with endpoints related to doctor management.

## Development
To run the application in development mode:
```bash
npm run dev
```
The application will automatically reload when changes are detected thanks to nodemon.

## License
MIT
