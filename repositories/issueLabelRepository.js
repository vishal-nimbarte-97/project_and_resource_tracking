const IssueLabel = require('../models/issueLabel');

const createIssueLabel = async (issueLabelData) => {
    try {
        const issueLabel = await IssueLabel.create(issueLabelData);
        return issueLabel;
    } catch (error) {
        throw new Error(`Error creating issue-label association: ${error.message}`);
    }
};

const getIssueLabels = async () => {
    try {
        return await IssueLabel.findAll();
    } catch (error) {
        throw new Error(`Error fetching issue-label associations: ${error.message}`);
    }
};

const getIssueLabelById = async (id) => {
    try {
        return await IssueLabel.findByPk(id);
    } catch (error) {
        throw new Error(`Error fetching issue-label association by ID: ${error.message}`);
    }
};

const updateIssueLabel = async (id, updatedData) => {
    try {
        const issueLabel = await IssueLabel.findByPk(id);
        if (!issueLabel) throw new Error('Issue-Label association not found');
        await issueLabel.update(updatedData);
        return issueLabel;
    } catch (error) {
        throw new Error(`Error updating issue-label association: ${error.message}`);
    }
};

const deleteIssueLabel = async (id) => {
    try {
        const issueLabel = await IssueLabel.findByPk(id);
        if (!issueLabel) throw new Error('Issue-Label association not found');
        await issueLabel.destroy();
        return issueLabel;
    } catch (error) {
        throw new Error(`Error deleting issue-label association: ${error.message}`);
    }
};

module.exports = {
    createIssueLabel,
    getIssueLabels,
    getIssueLabelById,
    updateIssueLabel,
    deleteIssueLabel
};
