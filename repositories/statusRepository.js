const Status = require('../models/status');

// Create a new status
const createStatus = async (statusData) => {
    try {
        const status = await Status.create(statusData);
        return status;
    } catch (error) {
        throw new Error('Error creating status: ' + error.message);
    }
};

// Get all statuses
const getAllStatuses = async () => {
    try {
        const statuses = await Status.findAll();
        return statuses;
    } catch (error) {
        throw new Error('Error fetching statuses: ' + error.message);
    }
};

// Get a status by ID
const getStatusById = async (id) => {
    try {
        const status = await Status.findByPk(id);
        if (!status) throw new Error('Status not found');
        return status;
    } catch (error) {
        throw new Error('Error fetching status: ' + error.message);
    }
};

// Update a status
const updateStatus = async (id, statusData) => {
    try {
        const status = await Status.findByPk(id);
        if (!status) throw new Error('Status not found');
        return await status.update(statusData);
    } catch (error) {
        throw new Error('Error updating status: ' + error.message);
    }
};

// Delete a status
const deleteStatus = async (id) => {
    try {
        const status = await Status.findByPk(id);
        if (!status) throw new Error('Status not found');
        await status.destroy();
        return { message: 'Status deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting status: ' + error.message);
    }
};

module.exports = {
    createStatus,
    getAllStatuses,
    getStatusById,
    updateStatus,
    deleteStatus
};
