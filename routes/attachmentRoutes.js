const express = require('express');
const attachmentController = require('../controllers/attachmentController');

const router = express.Router();

router.post('/', attachmentController.createAttachment);
router.get('/', attachmentController.getAttachments);
router.get('/:id', attachmentController.getAttachmentById);
router.put('/:id', attachmentController.updateAttachment);
router.delete('/:id', attachmentController.deleteAttachment);

module.exports = router;
