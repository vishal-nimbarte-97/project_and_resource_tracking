const IssueType = require('../models/issueType');

// Create a new issue type
const createIssueType = async (issueTypeData) => {
    try {
        const issueType = await IssueType.create(issueTypeData);
        return issueType;
    } catch (error) {
        throw new Error('Error creating issue type: ' + error.message);
    }
};

// Get all issue types
const getAllIssueTypes = async () => {
    try {
        const issueTypes = await IssueType.findAll();
        return issueTypes;
    } catch (error) {
        throw new Error('Error fetching issue types: ' + error.message);
    }
};

// Get an issue type by ID
const getIssueTypeById = async (id) => {
    try {
        const issueType = await IssueType.findByPk(id);
        if (!issueType) throw new Error('Issue type not found');
        return issueType;
    } catch (error) {
        throw new Error('Error fetching issue type: ' + error.message);
    }
};

// Update an issue type
const updateIssueType = async (id, issueTypeData) => {
    try {
        const issueType = await IssueType.findByPk(id);
        if (!issueType) throw new Error('Issue type not found');
        return await issueType.update(issueTypeData);
    } catch (error) {
        throw new Error('Error updating issue type: ' + error.message);
    }
};

// Delete an issue type
const deleteIssueType = async (id) => {
    try {
        const issueType = await IssueType.findByPk(id);
        if (!issueType) throw new Error('Issue type not found');
        await issueType.destroy();
        return { message: 'Issue type deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting issue type: ' + error.message);
    }
};

module.exports = {
    createIssueType,
    getAllIssueTypes,
    getIssueTypeById,
    updateIssueType,
    deleteIssueType
};
