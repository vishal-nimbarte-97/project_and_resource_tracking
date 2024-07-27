const projectUserRepository = require('../repositories/projectUserRepository');

// Create a new project user
const createProjectUser = async (req, res) => {
    try {
        const projectUser = await projectUserRepository.createProjectUser(req.body);
        res.status(201).json(projectUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all project users
const getAllProjectUsers = async (req, res) => {
    try {
        const projectUsers = await projectUserRepository.getAllProjectUsers();
        res.status(200).json(projectUsers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a project user by ID
const getProjectUserById = async (req, res) => {
    try {
        const projectUser = await projectUserRepository.getProjectUserById(req.params.id);
        res.status(200).json(projectUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update a project user
const updateProjectUser = async (req, res) => {
    try {
        const projectUser = await projectUserRepository.updateProjectUser(req.params.id, req.body);
        res.status(200).json(projectUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a project user
const deleteProjectUser = async (req, res) => {
    try {
        const result = await projectUserRepository.deleteProjectUser(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    createProjectUser,
    getAllProjectUsers,
    getProjectUserById,
    updateProjectUser,
    deleteProjectUser
};
