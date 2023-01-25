const Review = require('../models/Review');

// @desc POST Single Review for a Pharmacy :
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

// @desc GET ALL Reviews by id of the Pharmacy:
// @route GET http://localhost:5000/api/reviews/:id
// @access Private

const getAllReviewsByPharmacyID = async (req, res) => {
    const id = req.params.id;
    const AllReviewsPharmacy = await Review.find({id_Pharmacy: id})
    if(AllReviewsPharmacy){
        res.status(200)
        .json(AllReviewsPharmacy)
    } else {
        res.status(400)
        .json({message: "No Reviews :( "})
    }
}

module.exports = { createReview, getAllReviewsByPharmacyID }    