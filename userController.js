const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  const newUser = new User({ username, password, email });

  try {
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  // Implement authentication logic here
};
