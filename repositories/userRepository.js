const User = require('../models/user');

// Create a new user
const createUser = async (userData) => {
    try {
        const user = await User.create(userData);
        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

// Get all users
const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
};

// Get a user by ID
const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        return user;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
};

// Update a user
const updateUser = async (id, userData) => {
    try {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        return await user.update(userData);
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

// Delete a user
const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        await user.destroy();
        return { message: 'User deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
