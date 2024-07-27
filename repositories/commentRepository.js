const Comment = require('../models/comment');

const createComment = async (commentData) => {
    try {
        const comment = await Comment.create(commentData);
        return comment;
    } catch (error) {
        throw new Error(`Error creating comment: ${error.message}`);
    }
};

const getComments = async () => {
    try {
        return await Comment.findAll();
    } catch (error) {
        throw new Error(`Error fetching comments: ${error.message}`);
    }
};

const getCommentById = async (id) => {
    try {
        return await Comment.findByPk(id);
    } catch (error) {
        throw new Error(`Error fetching comment by ID: ${error.message}`);
    }
};

const updateComment = async (id, updatedData) => {
    try {
        const comment = await Comment.findByPk(id);
        if (!comment) throw new Error('Comment not found');
        await comment.update(updatedData);
        return comment;
    } catch (error) {
        throw new Error(`Error updating comment: ${error.message}`);
    }
};

const deleteComment = async (id) => {
    try {
        const comment = await Comment.findByPk(id);
        if (!comment) throw new Error('Comment not found');
        await comment.destroy();
        return comment;
    } catch (error) {
        throw new Error(`Error deleting comment: ${error.message}`);
    }
};

module.exports = {
    createComment,
    getComments,
    getCommentById,
    updateComment,
    deleteComment
};
