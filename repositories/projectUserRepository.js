const ProjectUser = require('../models/projectUser');

// Create a new project user
const createProjectUser = async (projectUserData) => {
    try {
        const projectUser = await ProjectUser.create(projectUserData);
        return projectUser;
    } catch (error) {
        throw new Error('Error creating project user: ' + error.message);
    }
};

// Get all project users
const getAllProjectUsers = async () => {
    try {
        const projectUsers = await ProjectUser.findAll();
        return projectUsers;
    } catch (error) {
        throw new Error('Error fetching project users: ' + error.message);
    }
};

// Get a project user by ID
const getProjectUserById = async (id) => {
    try {
        const projectUser = await ProjectUser.findByPk(id);
        if (!projectUser) throw new Error('Project user not found');
        return projectUser;
    } catch (error) {
        throw new Error('Error fetching project user: ' + error.message);
    }
};

// Update a project user
const updateProjectUser = async (id, projectUserData) => {
    try {
        const projectUser = await ProjectUser.findByPk(id);
        if (!projectUser) throw new Error('Project user not found');
        return await projectUser.update(projectUserData);
    } catch (error) {
        throw new Error('Error updating project user: ' + error.message);
    }
};

// Delete a project user
const deleteProjectUser = async (id) => {
    try {
        const projectUser = await ProjectUser.findByPk(id);
        if (!projectUser) throw new Error('Project user not found');
        await projectUser.destroy();
        return { message: 'Project user deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting project user: ' + error.message);
    }
};

module.exports = {
    createProjectUser,
    getAllProjectUsers,
    getProjectUserById,
    updateProjectUser,
    deleteProjectUser
};
