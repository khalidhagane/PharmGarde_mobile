const Pharmacy = require("../models/Pharmacy")

const getOnePharmacy = async (req, res, next, pharmacy_id) => {
    try {
        const pharmacy = await Pharmacy.findById(pharmacy_id)
        req.appartement = data
        next()
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            error: "Pharmacy not found",
        })
    }
}

module.exports = { getOnePharmacy }