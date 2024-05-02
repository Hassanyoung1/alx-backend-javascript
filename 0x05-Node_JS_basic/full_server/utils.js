// full_server/utils.js
const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    // Process data as needed (e.g., parse CSV, extract first names)
    return data;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };
