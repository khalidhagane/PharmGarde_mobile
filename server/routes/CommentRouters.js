const express = require('express');
const router = express.Router();

const {createComment} = require('../controllers/CommentsController')


router.post('/:id', createComment);


module.exports = router;