const issueLabelRepository = require('../repositories/issueLabelRepository');

const createIssueLabel = async (req, res) => {
    try {
        const issueLabel = await issueLabelRepository.createIssueLabel(req.body);
        res.status(201).json(issueLabel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getIssueLabels = async (req, res) => {
    try {
        const issueLabels = await issueLabelRepository.getIssueLabels();
        res.status(200).json(issueLabels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getIssueLabelById = async (req, res) => {
    try {
        const issueLabel = await issueLabelRepository.getIssueLabelById(req.params.id);
        if (!issueLabel) return res.status(404).json({ message: 'Issue-Label association not found' });
        res.status(200).json(issueLabel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateIssueLabel = async (req, res) => {
    try {
        const issueLabel = await issueLabelRepository.updateIssueLabel(req.params.id, req.body);
        if (!issueLabel) return res.status(404).json({ message: 'Issue-Label association not found' });
        res.status(200).json(issueLabel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteIssueLabel = async (req, res) => {
    try {
        const issueLabel = await issueLabelRepository.deleteIssueLabel(req.params.id);
        if (!issueLabel) return res.status(404).json({ message: 'Issue-Label association not found' });
        res.status(200).json({ message: 'Issue-Label association deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createIssueLabel,
    getIssueLabels,
    getIssueLabelById,
    updateIssueLabel,
    deleteIssueLabel
};
