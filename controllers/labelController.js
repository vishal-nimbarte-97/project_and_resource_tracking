const labelRepository = require('../repositories/labelRepository');

const createLabel = async (req, res) => {
    try {
        const label = await labelRepository.createLabel(req.body);
        res.status(201).json(label);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getLabels = async (req, res) => {
    try {
        const labels = await labelRepository.getLabels();
        res.status(200).json(labels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getLabelById = async (req, res) => {
    try {
        const label = await labelRepository.getLabelById(req.params.id);
        if (!label) return res.status(404).json({ message: 'Label not found' });
        res.status(200).json(label);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateLabel = async (req, res) => {
    try {
        const label = await labelRepository.updateLabel(req.params.id, req.body);
        if (!label) return res.status(404).json({ message: 'Label not found' });
        res.status(200).json(label);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteLabel = async (req, res) => {
    try {
        const label = await labelRepository.deleteLabel(req.params.id);
        if (!label) return res.status(404).json({ message: 'Label not found' });
        res.status(200).json({ message: 'Label deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createLabel,
    getLabels,
    getLabelById,
    updateLabel,
    deleteLabel
};
