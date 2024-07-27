const express = require('express');
const router = express.Router();
const projectUserController = require('../controllers/projectUserController');

// Define routes
router.post('/', projectUserController.createProjectUser);
router.get('/', projectUserController.getAllProjectUsers);
router.get('/:id', projectUserController.getProjectUserById);
router.put('/:id', projectUserController.updateProjectUser);
router.delete('/:id', projectUserController.deleteProjectUser);

module.exports = router;
