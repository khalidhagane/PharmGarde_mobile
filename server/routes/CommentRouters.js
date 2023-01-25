const express = require('express');
const router = express.Router();

const {createComment , deleteComment} = require('../controllers/CommentsController')


router.post('/:id', createComment);
router.delete('/:id', deleteComment)

module.exports = router;