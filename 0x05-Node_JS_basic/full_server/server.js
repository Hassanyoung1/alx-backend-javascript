// full_server/server.js
const express = require('express');
const routes = require('./routes');

const app = express();
const port = 1885;

// Use routes defined in index.js
app.use('/', routes);

// Start the server
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // Export the app for testing
