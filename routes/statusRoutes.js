const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

// Define routes
router.post('/', statusController.createStatus);
router.get('/', statusController.getAllStatuses);
router.get('/:id', statusController.getStatusById);
router.put('/:id', statusController.updateStatus);
router.delete('/:id', statusController.deleteStatus);

module.exports = router;
