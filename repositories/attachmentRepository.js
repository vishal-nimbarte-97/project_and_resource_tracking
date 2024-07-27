const Attachment = require('../models/attachment');

const createAttachment = async (attachmentData) => {
    try {
        const attachment = await Attachment.create(attachmentData);
        return attachment;
    } catch (error) {
        throw new Error(`Error creating attachment: ${error.message}`);
    }
};

const getAttachments = async () => {
    try {
        return await Attachment.findAll();
    } catch (error) {
        throw new Error(`Error fetching attachments: ${error.message}`);
    }
};

const getAttachmentById = async (id) => {
    try {
        return await Attachment.findByPk(id);
    } catch (error) {
        throw new Error(`Error fetching attachment by ID: ${error.message}`);
    }
};

const updateAttachment = async (id, updatedData) => {
    try {
        const attachment = await Attachment.findByPk(id);
        if (!attachment) throw new Error('Attachment not found');
        await attachment.update(updatedData);
        return attachment;
    } catch (error) {
        throw new Error(`Error updating attachment: ${error.message}`);
    }
};

const deleteAttachment = async (id) => {
    try {
        const attachment = await Attachment.findByPk(id);
        if (!attachment) throw new Error('Attachment not found');
        await attachment.destroy();
        return attachment;
    } catch (error) {
        throw new Error(`Error deleting attachment: ${error.message}`);
    }
};

module.exports = {
    createAttachment,
    getAttachments,
    getAttachmentById,
    updateAttachment,
    deleteAttachment
};
