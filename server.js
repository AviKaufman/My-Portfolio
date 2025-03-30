// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// --- Middleware ---
// Serve static files (HTML, CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// --- (Optional) API Route Example ---
// If you want to load project data dynamically later
const projectData = require('./data/projects.json'); // Load project data

app.get('/api/projects', (req, res) => {
  res.json(projectData); // Send project data as JSON
});

// --- Catch-all route (optional) ---
// If you want all non-api, non-static requests to go to index.html (for Single Page Apps)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// --- Start the Server ---
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});