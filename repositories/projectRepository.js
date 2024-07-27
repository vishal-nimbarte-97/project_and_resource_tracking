const Project = require('../models/project');

// Create a new project
const createProject = async (projectData) => {
    try {
        const project = await Project.create(projectData);
        return project;
    } catch (error) {
        throw new Error('Error creating project: ' + error.message);
    }
};

// Get all projects
const getAllProjects = async () => {
    try {
        const projects = await Project.findAll();
        return projects;
    } catch (error) {
        throw new Error('Error fetching projects: ' + error.message);
    }
};

// Get a project by ID
const getProjectById = async (id) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) throw new Error('Project not found');
        return project;
    } catch (error) {
        throw new Error('Error fetching project: ' + error.message);
    }
};

// Update a project
const updateProject = async (id, projectData) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) throw new Error('Project not found');
        return await project.update(projectData);
    } catch (error) {
        throw new Error('Error updating project: ' + error.message);
    }
};

// Delete a project
const deleteProject = async (id) => {
    try {
        const project = await Project.findByPk(id);
        if (!project) throw new Error('Project not found');
        await project.destroy();
        return { message: 'Project deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting project: ' + error.message);
    }
};

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
};
