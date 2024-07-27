const express = require('express');
const issueLabelController = require('../controllers/issueLabelController');

const router = express.Router();

router.post('/', issueLabelController.createIssueLabel);
router.get('/', issueLabelController.getIssueLabels);
router.get('/:id', issueLabelController.getIssueLabelById);
router.put('/:id', issueLabelController.updateIssueLabel);
router.delete('/:id', issueLabelController.deleteIssueLabel);

module.exports = router;
