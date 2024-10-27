const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseController');

router.post('/', CourseController.createCourse);
router.get('/', CourseController.getCourses);

module.exports = router;