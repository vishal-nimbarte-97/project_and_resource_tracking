const issueRepository = require('../repositories/issueRepository');

// Create a new issue
const createIssue = async (req, res) => {
    try {
        const issue = await issueRepository.createIssue(req.body);
        res.status(201).json(issue);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all issues
const getAllIssues = async (req, res) => {
    try {
        const issues = await issueRepository.getAllIssues();
        res.status(200).json(issues);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get an issue by ID
const getIssueById = async (req, res) => {
    try {
        const issue = await issueRepository.getIssueById(req.params.id);
        res.status(200).json(issue);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update an issue
const updateIssue = async (req, res) => {
    try {
        const issue = await issueRepository.updateIssue(req.params.id, req.body);
        res.status(200).json(issue);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an issue
const deleteIssue = async (req, res) => {
    try {
        const result = await issueRepository.deleteIssue(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    createIssue,
    getAllIssues,
    getIssueById,
    updateIssue,
    deleteIssue
};
