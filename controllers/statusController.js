const statusRepository = require('../repositories/statusRepository');

// Create a new status
const createStatus = async (req, res) => {
    try {
        const status = await statusRepository.createStatus(req.body);
        res.status(201).json(status);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all statuses
const getAllStatuses = async (req, res) => {
    try {
        const statuses = await statusRepository.getAllStatuses();
        res.status(200).json(statuses);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a status by ID
const getStatusById = async (req, res) => {
    try {
        const status = await statusRepository.getStatusById(req.params.id);
        res.status(200).json(status);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update a status
const updateStatus = async (req, res) => {
    try {
        const status = await statusRepository.updateStatus(req.params.id, req.body);
        res.status(200).json(status);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a status
const deleteStatus = async (req, res) => {
    try {
        const result = await statusRepository.deleteStatus(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    createStatus,
    getAllStatuses,
    getStatusById,
    updateStatus,
    deleteStatus
};
