const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const { title, description, duration, creator } = req.body;
  const newCourse = new Course({ title, description, duration, creator });

  try {
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};