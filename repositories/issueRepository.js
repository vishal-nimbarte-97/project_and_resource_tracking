const Issue = require('../models/issues');

// Create a new issue
const createIssue = async (issueData) => {
    try {
        const issue = await Issue.create(issueData);
        return issue;
    } catch (error) {
        throw new Error('Error creating issue: ' + error.message);
    }
};

// Get all issues
const getAllIssues = async () => {
    try {
        const issues = await Issue.findAll();
        return issues;
    } catch (error) {
        throw new Error('Error fetching issues: ' + error.message);
    }
};

// Get an issue by ID
const getIssueById = async (id) => {
    try {
        const issue = await Issue.findByPk(id);
        if (!issue) throw new Error('Issue not found');
        return issue;
    } catch (error) {
        throw new Error('Error fetching issue: ' + error.message);
    }
};

// Update an issue
const updateIssue = async (id, issueData) => {
    try {
        const issue = await Issue.findByPk(id);
        if (!issue) throw new Error('Issue not found');
        return await issue.update(issueData);
    } catch (error) {
        throw new Error('Error updating issue: ' + error.message);
    }
};

// Delete an issue
const deleteIssue = async (id) => {
    try {
        const issue = await Issue.findByPk(id);
        if (!issue) throw new Error('Issue not found');
        await issue.destroy();
        return { message: 'Issue deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting issue: ' + error.message);
    }
};

module.exports = {
    createIssue,
    getAllIssues,
    getIssueById,
    updateIssue,
    deleteIssue
};
