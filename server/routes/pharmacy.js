const express = require("express")
const router = express.Router()
const {
    createPharmacy,
    updatePharmacy,
    getPharmacies,
    getPharmacy,
    deletePharmacy
} = require("../controllers/pharmacyController")
const { getOnePharmacy } = require("../middlewares/pharmacy")

router.post("/", createPharmacy)
router.get("/:pharmacy_id", getPharmacy)
router.put("/:pharmacy_id", updatePharmacy)
router.get("/", getPharmacies)
router.delete("/:pharmacy_id", deletePharmacy)

router.param("pharmacy_id", getOnePharmacy)

module.exports = router