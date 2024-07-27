const projectRepository = require('../repositories/projectRepository');

// Create a new project
const createProject = async (req, res) => {
    try {
        const project = await projectRepository.createProject(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await projectRepository.getAllProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a project by ID
const getProjectById = async (req, res) => {
    try {
        const project = await projectRepository.getProjectById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update a project
const updateProject = async (req, res) => {
    try {
        const project = await projectRepository.updateProject(req.params.id, req.body);
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a project
const deleteProject = async (req, res) => {
    try {
        const result = await projectRepository.deleteProject(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
};
