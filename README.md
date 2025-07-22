# Contact App

This project is a Node.js application for managing contacts, using Express and MongoDB to perform CRUD (Create, Read, Update, Delete) operations.

## How to Run

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the server:**
   ```sh
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:PORT/
   ```
   Replace `PORT` with the port number configured in your project.

## Features

- Add, view, update, and delete contacts
- Connects to MongoDB database
- Uses Express for routing
- May use EJS or another template engine for views

## File Structure

- `index.js` — Main server file
- `models/` — Mongoose models for contacts
- `routes/` — Express route handlers for contact operations
- `views/` — Frontend templates (if used)

## Notes

- Ensure MongoDB is running locally or provide a remote connection string.
- Update environment variables or configuration files as needed.

## Documentation

Markdown files are for documentation only.  
To run code, use the terminal