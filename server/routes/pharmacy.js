const express = require("express")
const router = express.Router()
const {
    createPharmacy,
    updatePharmacy,
    getPharmacies,
    getPharmacy,
    deletePharmacy,
    searchPharmacy
} = require("../controllers/pharmacyController")
const { getOnePharmacy } = require("../middlewares/pharmacy")

const { validate } = require("../middlewares/bodyValidator")

const upload = require("../middlewares/uploadImage")

router.get("/search/:key", validate("search"), searchPharmacy)
router.post("/", upload.single("image"), validate("pharmacy"), createPharmacy)
router.get("/:pharmacy_id", getPharmacy)
router.put(
    "/:pharmacy_id",
    upload.single("image"),
    validate("pharmacy"),
    updatePharmacy
)
router.get("/", getPharmacies)
router.delete("/:pharmacy_id", deletePharmacy)

router.param("pharmacy_id", getOnePharmacy)

module.exports = router
