const express = require('express');
const router = express.Router();
const issueTypeController = require('../controllers/issueTypeController');

// Define routes
router.post('/', issueTypeController.createIssueType);
router.get('/', issueTypeController.getAllIssueTypes);
router.get('/:id', issueTypeController.getIssueTypeById);
router.put('/:id', issueTypeController.updateIssueType);
router.delete('/:id', issueTypeController.deleteIssueType);

module.exports = router;
