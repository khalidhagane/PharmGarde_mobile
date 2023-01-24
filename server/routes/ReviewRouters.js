const express = require('express');
const router = express.Router();

const {
    createReview,
    getAllReviewsByPharmacyID,
} = require("../controllers/ReviewController")

router.post('/:id' ,createReview)
router.get('/review:id',getAllReviewsByPharmacyID)



module.exports = router