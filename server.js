// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

const publicDirectoryPath = path.join(__dirname, 'public');
console.log(`Serving static files from: ${publicDirectoryPath}`);

// --- Middleware ---
// Serve static files (HTML, CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// --- API Route (keep for potential future use, but we won't fetch from it) ---
// const projectData = require('./data/projects.json'); // Load project data
// app.get('/api/projects', (req, res) => {
//   res.json(projectData);
// });

// --- ADD THIS: Route to serve the projects.json file statically ---
app.get('/data/projects.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'projects.json'), (err) => {
    if (err) {
      console.error("Error sending projects.json:", err);
      res.status(err.status || 500).send("Could not find projects data");
    }
  });
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