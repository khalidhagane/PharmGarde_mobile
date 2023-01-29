const express = require("express")
const router = express.Router()

const {
    createComment,
    deleteComment,
    getCommentPharmacy,
} = require("../controllers/CommentsController")

const { validate } = require("../middlewares/bodyValidator")

const { getOnePharmacy } = require("../middlewares/pharmacy")

router.post("/:pharmacy_id", validate("createComment"), createComment)
router.delete("/:pharmacy_id", deleteComment)
router.get("/:pharmacy_id", getCommentPharmacy)

router.param("pharmacy_id", getOnePharmacy)

module.exports = router
