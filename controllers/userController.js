const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

const saltRounds = 10;

const getAllUsers = async (req, res) => {
  try {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userRepository.getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = { ...req.body, password: hashedPassword };
    const createdUser = await userRepository.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedData = { ...req.body };
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      updatedData.password = hashedPassword;
    }
    const updatedUser = await userRepository.updateUser(req.params.id, updatedData);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await userRepository.deleteUser(req.params.id);
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
