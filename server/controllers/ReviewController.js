const Review = require("../models/Review")
const { validationResult } = require("express-validator/check")
const ErrorResponse = require("../utils/errorResponse")

/**
    @desc POST Single Review for a Pharmacy :
    @route POST http://localhost:5000/api/review/:id
    @access Public
*/

const createReview = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return next(new ErrorResponse(errors.array()[0].msg, 400))

    try {
        const ReviewData = await Review.create({
            review: req.body.review,
            id_Pharmacy: req.pharmacy._id,
        })

        if (!ReviewData)
            return res.status(400).json({
                message: "An Error Occured please try again ! :D",
            })

        res.status(200).json({
            message: "Review Created Succesfully ! Thank you",
        })
    } catch (error) {
        res.status(400).json({
            error,
        })
    }
}

/**
    @desc GET ALL Reviews by id of the Pharmacy:
    @route GET http://localhost:5000/api/review/:id
    @access Private
*/
const getAllReviewsByPharmacyID = async (req, res) => {
    const id = req.pharmacy._id

    try {
        // get the avearge of the reviews
        const AllReviewsPharmacy = await Review.aggregate([
            {
                $match: {
                    id_Pharmacy: id,
                },
            },
            {
                $group: {
                    _id: "$id_Pharmacy",
                    averageRating: { $avg: "$review" },
                },
            },
        ])

        if (!AllReviewsPharmacy)
            return res.status(400).json({ message: "No Reviews :( " })

        res.status(200).json(AllReviewsPharmacy)
    } catch (error) {
        res.status(400).json({
            error,
        })
    }
}

module.exports = { createReview, getAllReviewsByPharmacyID }
