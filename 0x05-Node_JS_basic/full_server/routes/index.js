import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

// Routes handling
const router = express.Router();

router.get('/', (req, res) => {
  // Home route
  AppController.getHomepage(req, res);
});

router.get('/students', (req, res) => {
  // Get all students
  StudentsController.getAllStudents(req, res);
});

router.get('/students/:major', (req, res) => {
  // Get all students in a given major
  StudentsController.getAllStudentsByMajor(req, res);
});

module.exports = router;
