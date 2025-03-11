const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.post('/posts', userController.createPost);
router.get('/users/:id', userController.getUserWithPosts);

module.exports = router;
