const express = require('express');
const router = express.Router();

const {createComment,
      deleteComment,
      getCommentPharmacy
    } = require('../controllers/CommentsController')


router.post('/:id', createComment);
router.delete('/:id', deleteComment)
router.get('/:id', getCommentPharmacy)

module.exports = router;