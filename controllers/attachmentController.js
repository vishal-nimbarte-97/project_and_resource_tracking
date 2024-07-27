const attachmentRepository = require('../repositories/attachmentRepository');

const createAttachment = async (req, res) => {
    try {
        const attachment = await attachmentRepository.createAttachment(req.body);
        res.status(201).json(attachment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAttachments = async (req, res) => {
    try {
        const attachments = await attachmentRepository.getAttachments();
        res.status(200).json(attachments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAttachmentById = async (req, res) => {
    try {
        const attachment = await attachmentRepository.getAttachmentById(req.params.id);
        if (!attachment) return res.status(404).json({ message: 'Attachment not found' });
        res.status(200).json(attachment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAttachment = async (req, res) => {
    try {
        const attachment = await attachmentRepository.updateAttachment(req.params.id, req.body);
        if (!attachment) return res.status(404).json({ message: 'Attachment not found' });
        res.status(200).json(attachment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAttachment = async (req, res) => {
    try {
        const attachment = await attachmentRepository.deleteAttachment(req.params.id);
        if (!attachment) return res.status(404).json({ message: 'Attachment not found' });
        res.status(200).json({ message: 'Attachment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAttachment,
    getAttachments,
    getAttachmentById,
    updateAttachment,
    deleteAttachment
};
