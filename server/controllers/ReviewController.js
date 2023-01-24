const { findOne } = require('../models/Review');
const { Pharmacy } = require('../controllers/pharmacyController')
const Review = require('../models/Review');

// @desc POST Single Client:
// @route POST http://localhost:5000/api/review/:id
// @access Public

const createReview = async (req, res) => {
    
    const ReviewData = await Review.create({
        review: req.body.review,
        id_Pharmacy: req.params.id
    });    
    if (ReviewData) {
        res.status(200)
            .json({ message: "Review Created Succesfully ! Thank you" })
    } else {
        res.status(400)
            .json({ message: "An Error Occured please try again ! :D" })
    }
}

const getAllReviewsByPharmacyID = (req, res) => {
    res.send('getAll Reviews Work!')
}

module.exports = { createReview, getAllReviewsByPharmacyID }