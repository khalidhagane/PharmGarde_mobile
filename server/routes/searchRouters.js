const express = require("express")
const router = express.Router()
const {searchPharmacy} = require("../controllers/pharmacyController")

router.get("/:key", searchPharmacy)

module.exports = router