// full_server/controllers/StudentsController.js
const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase('../database.csv'); // Update path
      // Process database data and send response
      res.status(200).send('Response from getAllStudents');
    } catch (error) {
      res.status(500).send('Error fetching students');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const database = await readDatabase('../database.csv'); // Update path
      // Process database data based on major and send response
      res.status(200).send(`Response from getAllStudentsByMajor for ${major}`);
    } catch (error) {
      res.status(500).send('Error fetching students by major');
    }
  }
}

module.exports = StudentsController;
