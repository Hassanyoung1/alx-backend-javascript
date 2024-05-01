const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    let totalStudents = 0;
    const studentsByField = {};

    lines.forEach((line, index) => {
      if (line && index !== 0) { // Skip header line (index 0)
        const fields = line.split(',');
        const firstName = fields[0].trim(); // Assuming first field is first name
        const field = fields[3].trim(); // Assuming fourth field is the field name

        // Increment total students count for each valid line
        totalStudents += 1;

        // Initialize the array for the field if it doesn't exist
        studentsByField[field] = studentsByField[field] || [];

        // Add first name to list for the field
        studentsByField[field].push(firstName);
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    Object.entries(studentsByField).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
