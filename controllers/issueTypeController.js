const issueTypeRepository = require('../repositories/issueTypeRepository');

// Create a new issue type
const createIssueType = async (req, res) => {
    try {
        const issueType = await issueTypeRepository.createIssueType(req.body);
        res.status(201).json(issueType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all issue types
const getAllIssueTypes = async (req, res) => {
    try {
        const issueTypes = await issueTypeRepository.getAllIssueTypes();
        res.status(200).json(issueTypes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get an issue type by ID
const getIssueTypeById = async (req, res) => {
    try {
        const issueType = await issueTypeRepository.getIssueTypeById(req.params.id);
        res.status(200).json(issueType);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update an issue type
const updateIssueType = async (req, res) => {
    try {
        const issueType = await issueTypeRepository.updateIssueType(req.params.id, req.body);
        res.status(200).json(issueType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an issue type
const deleteIssueType = async (req, res) => {
    try {
        const result = await issueTypeRepository.deleteIssueType(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    createIssueType,
    getAllIssueTypes,
    getIssueTypeById,
    updateIssueType,
    deleteIssueType
};
