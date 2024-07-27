const Label = require('../models/label');

const createLabel = async (labelData) => {
    try {
        const label = await Label.create(labelData);
        return label;
    } catch (error) {
        throw new Error(`Error creating label: ${error.message}`);
    }
};

const getLabels = async () => {
    try {
        return await Label.findAll();
    } catch (error) {
        throw new Error(`Error fetching labels: ${error.message}`);
    }
};

const getLabelById = async (id) => {
    try {
        return await Label.findByPk(id);
    } catch (error) {
        throw new Error(`Error fetching label by ID: ${error.message}`);
    }
};

const updateLabel = async (id, updatedData) => {
    try {
        const label = await Label.findByPk(id);
        if (!label) throw new Error('Label not found');
        await label.update(updatedData);
        return label;
    } catch (error) {
        throw new Error(`Error updating label: ${error.message}`);
    }
};

const deleteLabel = async (id) => {
    try {
        const label = await Label.findByPk(id);
        if (!label) throw new Error('Label not found');
        await label.destroy();
        return label;
    } catch (error) {
        throw new Error(`Error deleting label: ${error.message}`);
    }
};

module.exports = {
    createLabel,
    getLabels,
    getLabelById,
    updateLabel,
    deleteLabel
};
