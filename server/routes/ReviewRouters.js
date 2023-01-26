const express = require("express")
const router = express.Router()

const {
    createReview,
    getAllReviewsByPharmacyID,
} = require("../controllers/ReviewController")

const { validate } = require("../middlewares/bodyValidator")

const { getOnePharmacy } = require("../middlewares/pharmacy")

router.post("/:pharmacy_id", validate("createReview"), createReview)
router.get("/:pharmacy_id", getAllReviewsByPharmacyID)

router.param("pharmacy_id", getOnePharmacy)

module.exports = router
